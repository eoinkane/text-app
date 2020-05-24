import React from "react";
import { shallow } from "enzyme";
import MessageBox from "./index";
import User from "../../models/User";
import Message from "../../models/Message";
import MessageComponent from "../Message";
import { Grid } from "@material-ui/core";
import Avatar from "../Avatar";

describe("MessageBox", () => {
  const sender = new User({ firstName: "Jane", lastName: "Doe" });
  const currentUser = new User({ firstName: "Alex", lastName: "Doe" });
  const message = new Message({
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu consequat dui. Vivamus arcu tellus, tristique at purus ut, sagittis volutpat justo. Phasellus imperdiet ex. ",
  });

  it("Renders ", () => {
    const messageBox = shallow(
      <MessageBox sender={sender} currentUser={currentUser} message={message} />
    );
    expect(messageBox).toMatchSnapshot();
  });

  it("Renders the correct text", () => {
    const messageBox = shallow(
      <MessageBox sender={sender} currentUser={currentUser} message={message} />
    );
    expect(messageBox).toMatchSnapshot();

    expect(messageBox.find(MessageComponent).dive().text()).toEqual(
      message.get("message") as string
    );
  });

  it("Renders Avater on right for sent messages", () => {
    const messageBox = shallow(
      <MessageBox sender={sender} currentUser={sender} message={message} />
    );
    expect(messageBox).toMatchSnapshot();

    expect(messageBox.find(Grid).last().find(Avatar).length).toBe(1);
  });

  it("Renders Avater on left for recieved messages", () => {
    const messageBox = shallow(
      <MessageBox sender={sender} currentUser={currentUser} message={message} />
    );
    expect(messageBox).toMatchSnapshot();

    expect(
      messageBox.find(Grid).first().dive().find(Grid).find(Avatar).length
    ).toBe(1);
  });

  it("Renders the correct padding for right avatars", () => {
    const messageBox = shallow(
      <MessageBox sender={sender} currentUser={sender} message={message} />
    );
    expect(messageBox).toMatchSnapshot();

    expect(
      messageBox.find(Grid).last().hasClass("makeStyles-rightAvatarGrid-2")
    ).toBe(true);
  });
});
