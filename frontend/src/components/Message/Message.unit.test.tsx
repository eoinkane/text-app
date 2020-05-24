import React from "react";
import { shallow } from "enzyme";
import Message from "./index";

describe("Message", () => {
  const text =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu consequat dui. Vivamus arcu tellus, tristique at purus ut, sagittis volutpat justo. Phasellus imperdiet ex. ";

  it("Renders ", () => {
    const messageLeft = shallow(<Message left>{text}</Message>);
    const messageRight = shallow(<Message right>{text}</Message>);
    const messageCentre = shallow(
      <Message left right>
        {text}
      </Message>
    );

    expect(messageLeft).toMatchSnapshot();
    expect(messageRight).toMatchSnapshot();
    expect(messageCentre).toMatchSnapshot();
  });

  it("Renders with the correct text", () => {
    const message = shallow(<Message left>{text}</Message>);

    expect(message).toMatchSnapshot();
    expect(message.text()).toBe(text);
  });

  it("Renders at the left", () => {
    const message = shallow(<Message left>{text}</Message>);
    expect(message).toMatchSnapshot();
    expect(message.hasClass("makeStyles-left-2")).toBe(true);
  });

  it("Renders at the right", () => {
    const message = shallow(<Message right>{text}</Message>);
    expect(message).toMatchSnapshot();
    expect(message.hasClass("makeStyles-right-3")).toBe(true);
  });
});
