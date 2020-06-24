import React from "react";
import { mount } from "enzyme";
import { act } from "react-dom/test-utils";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import User from "../../models/User";
import { CurrentUserProvider, initialCurrentUser } from "./index";
import {
  TestHelperParent,
  TestHelperParentWithInit,
  TestHelperChild2,
  TestHelperChild3,
  TestHelperChild4,
} from "./__mocks__/index";

export const passCurrentUserFn = jest.fn();

const mock = new MockAdapter(axios);

describe("Loading Context", () => {
  it("Renders children", () => {
    const currentUserContext = mount(
      <CurrentUserProvider>
        <TestHelperParent />
      </CurrentUserProvider>
    );
    expect(currentUserContext).toMatchSnapshot();

    expect(
      currentUserContext.find(CurrentUserProvider).children().first().type()
    ).toBe(TestHelperParent);
  });

  it("Current User is initialCurrentUser", () => {
    const currentUserContext = mount(
      <CurrentUserProvider>
        <TestHelperParent />
      </CurrentUserProvider>
    );

    expect(
      currentUserContext
        .find(CurrentUserProvider)
        .find(TestHelperChild2)
        .prop("testProp")
    ).toBe(initialCurrentUser);
  });

  it("Current User is available through `useCurrentUser` hook", () => {
    const currentUser = new User();
    currentUser.init({
      username: "test_user",
      id: 0,
      firstName: "test",
      lastName: "user",
    });
    const currentUserContext = mount(
      <CurrentUserProvider initialCurrentUserProp={currentUser}>
        <TestHelperParent />
      </CurrentUserProvider>
    );
    expect(
      currentUserContext
        .find(CurrentUserProvider)
        .find(TestHelperChild2)
        .prop("testProp")
    ).toBe(currentUser);
  });

  it("Current User can be set through `initUser` ", (done) => {
    mock.onPost("http://127.0.0.1:5000/api/users").reply(201, {
      id: 0,
      username: "test_user",
      firstName: "test",
      lastName: "user",
    });
    const currentUserContext = mount(
      <CurrentUserProvider>
        <TestHelperParentWithInit />
      </CurrentUserProvider>
    );
    act(() => {
      currentUserContext
        .find(CurrentUserProvider)
        .find(TestHelperChild3)
        .find("button")
        .simulate("click");
    });

    act(() => {
      setTimeout(() => {
        act(() => {
          currentUserContext
            .find(CurrentUserProvider)
            .find(TestHelperChild4)
            .find("button")
            .simulate("click");
        });

        act(() => {
          expect(passCurrentUserFn).toBeCalledWith({
            data: {
              firstName: "test",
              id: 0,
              lastName: "user",
              username: "test_user",
            },
          });
        });

        done();
      }, 500);
    });
  });
});
