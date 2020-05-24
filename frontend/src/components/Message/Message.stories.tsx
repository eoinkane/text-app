import React from "react";
import MessageComponent from "./index";
import Container from "@material-ui/core/Container";
import { Typography } from "@material-ui/core";

export default {
  title: "Message",
  component: MessageComponent,
};

export const Message = () => {
  const text =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu consequat dui. Vivamus arcu tellus, tristique at purus ut, sagittis volutpat justo. Phasellus imperdiet ex. ";
  return (
    <Container style={{ padding: "4vh 4vw" }}>
      <Typography style={{ textAlign: "center", paddingBottom: 10 }}>
        Left Aligned Message
      </Typography>
      <Container
        style={{
          backgroundColor: "#f5f5f5",
          margin: "20px 0",
        }}
      >
        <MessageComponent left={true} text={text} />
      </Container>

      <Typography style={{ textAlign: "center", paddingBottom: 10 }}>
        Right Aligned Message
      </Typography>
      <Container style={{ backgroundColor: "#f5f5f5", margin: "20px 0" }}>
        <MessageComponent right={true} text={text} />
      </Container>
    </Container>
  );
};

export const CentreMessage = () => {
  const text =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu consequat dui. Vivamus arcu tellus, tristique at purus ut, sagittis volutpat justo. Phasellus imperdiet ex. ";
  return (
    <Container style={{ padding: "4vh 4vw" }}>
      <Typography style={{ textAlign: "center", paddingBottom: 10 }}>
        Centre Aligned Message
      </Typography>
      <Container style={{ backgroundColor: "#f5f5f5", margin: "20px 0" }}>
        <MessageComponent right={true} left={true} text={text} />
      </Container>
    </Container>
  );
};
