import React from "react";
import { mount } from "enzyme";
import { useLoading, LoadingContextProvider, types, reducer } from "./index";

const TestHelper = () => {
  const { loading, loadingActions } = useLoading("TestHelper");
  return (
    <div>
      <p>{loading ? "true" : "false"}</p>
      <button onClick={loadingActions.ON}>ON</button>
      <button onClick={loadingActions.OFF}>OFF</button>
    </div>
  );
};

describe("Loading Context", () => {
  it("Renders children", () => {
    const loadingContext = mount(
      <LoadingContextProvider>
        <TestHelper />
      </LoadingContextProvider>
    );
    expect(loadingContext).toMatchSnapshot();

    expect(
      loadingContext.find(LoadingContextProvider).children().first().type()
    ).toBe(TestHelper);
  });

  it("Provides loading to the component", () => {
    const loadingContext = mount(
      <LoadingContextProvider>
        <TestHelper />
      </LoadingContextProvider>
    );

    expect(loadingContext.find("p").text()).toBe("false");
  });

  it("Dispatch ON changes loading to true", () => {
    const loadingContext = mount(
      <LoadingContextProvider>
        <TestHelper />
      </LoadingContextProvider>
    );

    loadingContext.find("button").first().simulate("click");

    expect(loadingContext.find("p").text()).toBe("true");
  });

  it("Dispatch OFF changes loading to false", () => {
    const loadingContext = mount(
      <LoadingContextProvider>
        <TestHelper />
      </LoadingContextProvider>
    );

    loadingContext.find("button").first().simulate("click");
    loadingContext.find("button").last().simulate("click");

    expect(loadingContext.find("p").text()).toBe("false");
  });
});

describe("Loading Reducer", () => {
  it("ON action", () => {
    const result = reducer(false, { type: types.ON });

    expect(result).toMatchSnapshot();

    expect(result).toBe(true);
  });

  it("OFF action", () => {
    const result = reducer(true, { type: types.OFF });

    expect(result).toMatchSnapshot();

    expect(result).toBe(false);
  });
});
