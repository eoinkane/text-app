import React from "react";
import { shallow, mount } from "enzyme";
import HeaderBar from "./index";

import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { MemoryRouter, Link } from "react-router-dom";

import { LoadingContext } from "./../../contexts/LoadingContext";
import CircularProgress from "@material-ui/core/CircularProgress";

describe("HeaderBar", () => {
  it("Renders", () => {
    const headerBar = shallow(
      <MemoryRouter keyLength={0}>
        <HeaderBar />
      </MemoryRouter>
    );
    expect(headerBar).toMatchSnapshot();
  });

  it("Renders with correct text", () => {
    const headerBar = shallow(<HeaderBar />);

    expect(headerBar).toMatchSnapshot();
    expect(headerBar.find(Typography).text()).toEqual("Messages");
    expect(headerBar.find(Button).text()).toEqual("Login");
  });

  it('Goes to "/" when home button pressed', () => {
    const headerBar = shallow(
      <MemoryRouter initialEntries={["/test_url"]} keyLength={0}>
        <HeaderBar />
      </MemoryRouter>
    );

    headerBar.find(HeaderBar).dive().find(Link).simulate("click");

    expect(window.location.pathname).toBe("/");
  });

  it("Renders no loading spinner when loading is false", () => {
    const headerBar = mount(
      <LoadingContext.Provider value={{ dispatch: () => {}, loading: false }}>
        <MemoryRouter keyLength={0}>
          <HeaderBar />
        </MemoryRouter>
      </LoadingContext.Provider>
    );

    expect(headerBar.find(CircularProgress).length).toBe(0);
  });

  it("Renders a loading spinner when loading is true", () => {
    const headerBar = mount(
      <LoadingContext.Provider value={{ dispatch: () => {}, loading: true }}>
        <MemoryRouter keyLength={0}>
          <HeaderBar />
        </MemoryRouter>
      </LoadingContext.Provider>
    );

    expect(headerBar.find(CircularProgress).length).toBe(1);
  });
});
