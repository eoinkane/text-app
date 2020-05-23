import React from "react";
import { shallow } from "enzyme";
import HeaderBar from "./index";

import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { MemoryRouter, Link } from "react-router-dom";

describe("HeaderBar", () => {
  it("Renders", () => {
    const headerBar = shallow(
      <MemoryRouter>
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
      <MemoryRouter initialEntries={["/test_url"]}>
        <HeaderBar />
      </MemoryRouter>
    );

    headerBar.find(HeaderBar).dive().find(Link).simulate("click");

    expect(location.pathname).toBe("/");
  });
});
