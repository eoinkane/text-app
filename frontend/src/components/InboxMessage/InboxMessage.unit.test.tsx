import React from "react";
import { shallow, mount } from "enzyme";
import InboxMessage from "./index";

describe("InboxMessage", () => {
  const text =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu consequat dui. Vivamus arcu tellus, tristique at purus ut, sagittis volutpat justo. Phasellus imperdiet ex. ";
  it("Renders ", () => {
    const inboxMessage = shallow(<InboxMessage>{text}</InboxMessage>);
    expect(inboxMessage).toMatchSnapshot();
  });

  it("Renders with the correct text", () => {
    const inboxMessage = mount(<InboxMessage>{text}</InboxMessage>);

    expect(inboxMessage).toMatchSnapshot();
    expect(inboxMessage.text()).toBe(text);
  });
});
