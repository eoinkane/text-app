import React from "react";
import { shallow } from "enzyme";
import HeaderBar from "./index";

import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

describe("HeaderBar", () => {
  it("Renders", () => {
    const headerBar = shallow(<HeaderBar />);
    expect(headerBar).toMatchSnapshot();
  });

  it("Renders link to Google with classname", () => {
    const headerBar = shallow(<HeaderBar />);
    expect(headerBar).toMatchSnapshot();
    expect(headerBar.find(Typography).text()).toEqual("News");
    expect(headerBar.find(Button).text()).toEqual("Login");
  });
});
