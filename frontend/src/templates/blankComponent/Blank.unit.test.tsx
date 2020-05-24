import React from "react";
import { shallow } from "enzyme";
import Blank from "./index";

describe("Blank", () => {
  it("Renders ", () => {
    const blank = shallow(<Blank />);
    expect(blank).toMatchSnapshot();
  });
});
