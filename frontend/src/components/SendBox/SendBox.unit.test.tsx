import React from "react";
import { shallow, mount } from "enzyme";
import SendBox from "./index";
import { onClickHandler } from "./onClickHandler/onClickHandler";
import SendButton from "./../SendButton";
import TextBox from "./../TextBox";
import { TextField } from "@material-ui/core";

describe("SendBox", () => {
  it("Renders ", () => {
    const sendBox = shallow(
      <SendBox onClickHandler={onClickHandler} onSubmit={jest.fn()} />
    );
    expect(sendBox).toMatchSnapshot();
  });

  it("Renders a Text Box in message mode", () => {
    const sendBox = shallow(
      <SendBox onClickHandler={onClickHandler} onSubmit={jest.fn()} />
    );
    expect(sendBox).toMatchSnapshot();

    expect(sendBox.find(TextBox).length).toBe(1);
    expect(sendBox.find(TextBox).prop("message")).toBe(true);
  });

  it("Renders a Send Button", () => {
    const sendBox = shallow(
      <SendBox onClickHandler={onClickHandler} onSubmit={jest.fn()} />
    );
    expect(sendBox).toMatchSnapshot();

    expect(sendBox.find(SendButton).length).toBe(1);
  });

  it("Fires onClickHandler when SendButton clicked", () => {
    const mock = jest.fn();
    const sendBox = mount(
      <SendBox onClickHandler={mock} onSubmit={jest.fn()} />
    );
    expect(sendBox).toMatchSnapshot();

    sendBox.find(SendButton).find("button").simulate("click");
    expect(mock).toHaveBeenCalledTimes(1);
  });

  it("Fires onSubmit when onClickHandler is passed a valid ref", () => {
    const mock = jest.fn();
    const sendBox = mount(
      <SendBox onClickHandler={onClickHandler} onSubmit={mock} />
    );
    expect(sendBox).toMatchSnapshot();

    sendBox.find(SendButton).find("button").simulate("click");
    expect(mock).toHaveBeenCalledTimes(1);
  });

  it("Calls onSubmit with the message box text", () => {
    const mock = jest.fn();
    const textUpdate = "test text";
    const sendBox = mount(
      <SendBox onClickHandler={onClickHandler} onSubmit={mock} />
    );
    expect(sendBox).toMatchSnapshot();

    sendBox
      .find(TextBox)
      .find(TextField)
      .find("textarea")
      .first()
      .getDOMNode<HTMLInputElement>().value = textUpdate;

    sendBox.update();

    sendBox.find(SendButton).find("button").simulate("click");

    expect(mock).toHaveBeenCalledTimes(1);
    expect(mock).toHaveBeenCalledWith(textUpdate);
  });
});
