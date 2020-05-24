import React from "react";
import { mount, shallow } from "enzyme";
import TextBox from "./index";
import TextField from "@material-ui/core/TextField";
import InputBase from "@material-ui/core/InputBase";

describe("TextBox", () => {
  it("Renders ", () => {
    const textBoxUserName = shallow(
      <TextBox id={"textBoxUserName"} user product={"name"} />
    );
    const textBoxPassword = shallow(
      <TextBox id={"textBoxPassword"} password />
    );
    const textBoxMessage = shallow(<TextBox id={"textBoxMessage"} message />);

    expect(textBoxUserName).toMatchSnapshot();
    expect(textBoxPassword).toMatchSnapshot();
    expect(textBoxMessage).toMatchSnapshot();
  });

  it("Displays correct product when user mode", () => {
    const product = "name";
    const textBox = mount(<TextBox id={"textBox"} user product={product} />);

    expect(textBox).toMatchSnapshot();

    expect(textBox.find(TextField).find("span").text()).toContain(product);
  });

  it("Displays correct product when message mode", () => {
    const product = "message";
    const textBox = mount(<TextBox id={"textBox"} message />);

    expect(textBox).toMatchSnapshot();

    expect(textBox.find(TextField).find("span").text()).toContain(product);
  });

  it("Displays correct product when password mode", () => {
    const product = "password";
    const textBox = mount(<TextBox id={"textBox"} password />);

    expect(textBox).toMatchSnapshot();

    expect(textBox.find(TextField).find("span").text()).toContain(product);
  });

  it("Renders 4 rows when message mode", () => {
    const rows = "4";
    const textBox = mount(<TextBox id={"textBox"} message />);

    expect(textBox).toMatchSnapshot();

    expect(
      textBox
        .find(TextField)
        .find(InputBase)
        .find("textarea")
        .getDOMNode()
        .attributes.getNamedItem("rows")!.value
    ).toBe(rows);
  });

  it("Renders 1 rows when not message mode", () => {
    const rows = "1";
    const textBoxUser = mount(<TextBox id={"textBox"} user product={"name"} />);
    const textBoxPassword = mount(<TextBox id={"textBox"} password />);

    expect(textBoxUser).toMatchSnapshot();
    expect(textBoxPassword).toMatchSnapshot();

    expect(
      textBoxUser
        .find(TextField)
        .find(InputBase)
        .find("textarea")
        .getDOMNode()
        .attributes.getNamedItem("rows")!.value
    ).toBe(rows);

    expect(
      textBoxPassword.find(TextField).find(InputBase).find("input").prop("rows")
    ).toBe(parseInt(rows));
  });
});
