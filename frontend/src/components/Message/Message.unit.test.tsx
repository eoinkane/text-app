import React from "react";
import { shallow } from "enzyme";
import Message from "./index";

describe("Message", () => {
  it("Renders ", () => {
    const text =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu consequat dui. Vivamus arcu tellus, tristique at purus ut, sagittis volutpat justo. Phasellus imperdiet ex. ";
    const message = shallow(<Message text={text} />);
    expect(Message).toMatchSnapshot();
  });

  it("Renders with the correct text", () => {
    const text =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu consequat dui. Vivamus arcu tellus, tristique at purus ut, sagittis volutpat justo. Phasellus imperdiet ex. ";
    const message = shallow(<Message text={text} />);

    expect(Message).toMatchSnapshot();
    expect(message.text()).toBe(text);
  });
});
