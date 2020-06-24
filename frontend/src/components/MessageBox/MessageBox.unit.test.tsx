import React from "react";
import { shallow, mount } from "enzyme";
import Grid from "@material-ui/core/Grid";
import MessageBox from "./index";
import User from "../../models/User";
import Message from "../../models/Message";
import MessageComponent from "../Message";
import Avatar from "../Avatar";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

describe("MessageBox", () => {
  const sender = new User();
  sender.init({
    username: "test",
    id: 0,
    firstName: "Alex",
    lastName: "Doe",
  });
  const message = new Message({
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu consequat dui. Vivamus arcu tellus, tristique at purus ut, sagittis volutpat justo. Phasellus imperdiet ex. ",
  });

  const currentUser = new User();
  currentUser.init({
    username: "jane_doe",
    id: 0,
    firstName: "Jane",
    lastName: "Doe",
  });

  it("Renders ", () => {
    const messageBox = shallow(
      <CurrentUserContext.Provider
        value={{
          currentUser: currentUser,
          initUser: jest.fn(),
          error: false,
        }}
      >
        <MessageBox sender={sender} message={message} />
      </CurrentUserContext.Provider>
    );
    expect(messageBox).toMatchSnapshot();
  });

  it("Renders the correct text", () => {
    const messageBox = mount(
      <CurrentUserContext.Provider
        value={{
          currentUser: currentUser,
          initUser: jest.fn(),
          error: false,
        }}
      >
        <MessageBox sender={sender} message={message} />
      </CurrentUserContext.Provider>
    );
    expect(messageBox).toMatchSnapshot();

    expect(messageBox.find(MessageComponent).text()).toEqual(
      message.get("message") as string
    );
  });

  it("Renders Avater on right for sent messages", () => {
    const messageBox = mount(
      <CurrentUserContext.Provider
        value={{
          currentUser: currentUser,
          initUser: jest.fn(),
          error: false,
        }}
      >
        <MessageBox sender={currentUser} message={message} />
      </CurrentUserContext.Provider>
    );
    expect(messageBox).toMatchSnapshot();

    expect(messageBox.find(Grid).children().last().find(Avatar).length).toBe(1);
  });

  it("Renders Avater on left for recieved messages", () => {
    const messageBox = mount(
      <CurrentUserContext.Provider
        value={{
          currentUser: currentUser,
          initUser: jest.fn(),
          error: false,
        }}
      >
        <MessageBox sender={sender} message={message} />
      </CurrentUserContext.Provider>
    );
    expect(messageBox).toMatchSnapshot();

    expect(messageBox.find(Grid).children().first().find(Avatar).length).toBe(
      1
    );
  });

  it("Renders the correct padding for right avatars", () => {
    const messageBox = mount(
      <CurrentUserContext.Provider
        value={{
          currentUser: currentUser,
          initUser: jest.fn(),
          error: false,
        }}
      >
        <MessageBox sender={currentUser} message={message} />
      </CurrentUserContext.Provider>
    );
    expect(messageBox).toMatchSnapshot();

    expect(
      messageBox
        .find(Grid)
        .children()
        .last()
        .hasClass("makeStyles-rightAvatarGrid-2")
    ).toBe(true);
  });
});
