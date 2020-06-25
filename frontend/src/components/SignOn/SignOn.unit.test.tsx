import React from "react";
import { shallow } from "enzyme";
import SignOn from "./index";

describe("SignOn", () => {
  it("Renders ", () => {
    const wrapper = shallow(<SignOn />);
    expect(wrapper).toMatchSnapshot();
  });
});
