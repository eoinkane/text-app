import React from "react";
import { shallow, mount } from "enzyme";
import InboxMessage from "./index";

import Message from "../../models/Message";
import User from "../../models/User";
import { Typography } from "@material-ui/core";

describe("InboxMessage", () => {
  const currentUser = new User({ firstName: "Jane", lastName: "Doe" });
  const sentMessage = new Message({
    sender: currentUser,
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu consequat dui. Vivamus arcu tellus, tristique at purus ut, sagittis volutpat justo. Phasellus imperdiet ex. ",
  });
  const otherParticipant = new User({
    firstName: "John",
    lastName: "Appleseed",
  });
  const recievedMessage = new Message({
    sender: otherParticipant,
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu consequat dui. Vivamus arcu tellus, tristique at purus ut, sagittis volutpat justo. Phasellus imperdiet ex. ",
  });

  it("Renders ", () => {
    const inboxMessage = shallow(
      <InboxMessage
        sent
        currentUser={currentUser}
        otherParticipant={otherParticipant}
        message={sentMessage}
      />
    );
    expect(inboxMessage).toMatchSnapshot();
  });

  it("Renders with the correct text in sent mode", () => {
    const inboxMessage = mount(
      <InboxMessage
        sent
        currentUser={currentUser}
        otherParticipant={otherParticipant}
        message={sentMessage}
      />
    );

    expect(inboxMessage).toMatchSnapshot();
    expect(inboxMessage.find(Typography).first().text()).toBe(
      `${otherParticipant.get("firstName") as string} ${
        otherParticipant.get("lastName") as string
      }`
    );
    expect(inboxMessage.find(Typography).last().text()).toBe(
      `You: ${sentMessage.get("message")}`
    );
  });

  it("Renders with the correct text in recieved mode", () => {
    const inboxMessage = mount(
      <InboxMessage
        recieved
        currentUser={currentUser}
        otherParticipant={otherParticipant}
        message={recievedMessage}
      />
    );

    const firstName = otherParticipant.get("firstName") as string;
    const lastName = otherParticipant.get("lastName") as string;
    const initials = `${firstName[0]}${lastName[0]}`;

    expect(inboxMessage).toMatchSnapshot();
    expect(inboxMessage.find(Typography).first().text()).toBe(
      `${otherParticipant.get("firstName") as string} ${
        otherParticipant.get("lastName") as string
      }`
    );
    expect(inboxMessage.find(Typography).last().text()).toBe(
      `${initials}: ${sentMessage.get("message")}`
    );
  });
});
