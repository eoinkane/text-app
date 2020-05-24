import React from "react";
import { shallow } from "enzyme";
import SendButton from "./index";
import IconButton from "@material-ui/core/IconButton";
import SendIcon from "@material-ui/icons/Send";

describe("SendButton", () => {
  it("Renders ", () => {
    const sendButton = shallow(<SendButton onClick={() => {}} />);
    expect(sendButton).toMatchSnapshot();
  });

  it("Renders Icon Button", () => {
    const sendButton = shallow(<SendButton onClick={() => {}} />);
    expect(sendButton).toMatchSnapshot();

    expect(sendButton.find(IconButton).length).toBe(1);
  });

  it("Renders Send Icon", () => {
    const sendButton = shallow(<SendButton onClick={() => {}} />);
    expect(sendButton).toMatchSnapshot();

    expect(sendButton.find(IconButton).dive().find(SendIcon).length).toBe(1);
  });

  it("Test click event", () => {
    const mockCallBack = jest.fn();

    const sendButton = shallow(<SendButton onClick={mockCallBack} />);
    sendButton.find(IconButton).simulate("click");
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});
