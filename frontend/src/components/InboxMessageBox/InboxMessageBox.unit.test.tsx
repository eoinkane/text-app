import React from "react";
import { shallow } from "enzyme";
import InboxMessageBox from "./index";
import Message from "../../models/Message";
import User from "../../models/User";
import Avatar from "../Avatar";
import InboxMessage from "../InboxMessage";
import { Grid } from "@material-ui/core";

describe("InboxMessageBox", () => {
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
    const inboxMessageBox = shallow(
      <InboxMessageBox
        currentUser={currentUser}
        otherParticipant={otherParticipant}
        message={sentMessage}
      />
    );
    expect(inboxMessageBox).toMatchSnapshot();
  });

  it("Renders a Avatar", () => {
    const inboxMessageBox = shallow(
      <InboxMessageBox
        currentUser={currentUser}
        otherParticipant={otherParticipant}
        message={sentMessage}
      />
    );
    expect(inboxMessageBox).toMatchSnapshot();

    expect(inboxMessageBox.find(Avatar).length).toBe(1);
  });

  it("Renders a InboxMessage", () => {
    const inboxMessageBox = shallow(
      <InboxMessageBox
        currentUser={currentUser}
        otherParticipant={otherParticipant}
        message={sentMessage}
      />
    );
    expect(inboxMessageBox).toMatchSnapshot();

    expect(inboxMessageBox.find(InboxMessage).length).toBe(1);
  });

  it("Renders InboxMessage in sent mode when last message is from current user", () => {
    const inboxMessageBox = shallow(
      <InboxMessageBox
        currentUser={currentUser}
        otherParticipant={otherParticipant}
        message={sentMessage}
      />
    );
    expect(inboxMessageBox).toMatchSnapshot();

    expect(inboxMessageBox.find(InboxMessage).prop("sent")).toBe(true);
    expect(inboxMessageBox.find(InboxMessage).prop("recieved")).toBe(false);
  });

  it("Renders InboxMessage in recieved mode when last message is from otherParticipant", () => {
    const inboxMessageBox = shallow(
      <InboxMessageBox
        currentUser={currentUser}
        otherParticipant={otherParticipant}
        message={recievedMessage}
      />
    );
    expect(inboxMessageBox).toMatchSnapshot();

    expect(inboxMessageBox.find(InboxMessage).prop("sent")).toBe(false);
    expect(inboxMessageBox.find(InboxMessage).prop("recieved")).toBe(true);
  });

  it("Passes InboxMessage correct props", () => {
    const inboxMessageBox = shallow(
      <InboxMessageBox
        currentUser={currentUser}
        otherParticipant={otherParticipant}
        message={sentMessage}
      />
    );
    expect(inboxMessageBox).toMatchSnapshot();

    expect(inboxMessageBox.find(InboxMessage).prop("currentUser")).toBe(
      currentUser
    );
    expect(inboxMessageBox.find(InboxMessage).prop("otherParticipant")).toBe(
      otherParticipant
    );
    expect(inboxMessageBox.find(InboxMessage).prop("message")).toBe(
      sentMessage
    );
  });

  it("Passes Avatar correct props", () => {
    const inboxMessageBox = shallow(
      <InboxMessageBox
        currentUser={currentUser}
        otherParticipant={otherParticipant}
        message={sentMessage}
      />
    );
    expect(inboxMessageBox).toMatchSnapshot();

    expect(inboxMessageBox.find(Avatar).prop("user")).toBe(otherParticipant);
  });

  it("Applys the correct class for the avatar grid", () => {
    const inboxMessage = shallow(
      <InboxMessageBox
        currentUser={currentUser}
        otherParticipant={otherParticipant}
        message={sentMessage}
      />
    );
    expect(inboxMessage).toMatchSnapshot();

    expect(
      inboxMessage.find(Grid).at(1).hasClass("makeStyles-avatarGrid-4")
    ).toBe(true);
  });

  it("Renders the correct padding for InboxMessage grid", () => {
    const inboxMessage = shallow(
      <InboxMessageBox
        currentUser={currentUser}
        otherParticipant={otherParticipant}
        message={sentMessage}
      />
    );
    expect(inboxMessage).toMatchSnapshot();

    expect(
      inboxMessage.find(Grid).at(2).hasClass("makeStyles-inboxMessageGrid-3")
    ).toBe(true);
  });
});
