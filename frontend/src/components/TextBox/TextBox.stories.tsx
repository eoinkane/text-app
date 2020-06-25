import React from "react";
import TextBoxComponent from "./index";
import { Container, Typography } from "@material-ui/core";

export default {
  title: "TextBox",
  component: TextBoxComponent,
};

export const TextBox = () => {
  return (
    <Container style={{ padding: "4vh 4vw" }}>
      <Typography style={{ textAlign: "center", paddingBottom: 10 }}>
        Message Input
      </Typography>
      <Container
        style={{
          backgroundColor: "#f5f5f5",
          margin: "20px 0",
        }}
      >
        <TextBoxComponent id={"TextBoxID1"} message />
      </Container>
      <Typography style={{ textAlign: "center", paddingBottom: 10 }}>
        User Input
      </Typography>
      <Container
        style={{
          backgroundColor: "#f5f5f5",
          margin: "20px 0",
        }}
      >
        <TextBoxComponent id={"TextBoxID2"} user product={"username"} />
      </Container>

      <Typography style={{ textAlign: "center", paddingBottom: 10 }}>
        Password Input
      </Typography>
      <Container
        style={{
          backgroundColor: "#f5f5f5",
          margin: "20px 0",
        }}
      >
        <TextBoxComponent id={"TextBoxID3"} password />
      </Container>
    </Container>
  );
};
