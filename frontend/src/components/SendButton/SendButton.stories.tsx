import React from "react";
import { action } from "@storybook/addon-actions";
import SendButtonComponent from "./index";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

export default {
  title: "SendButton",
  component: SendButtonComponent,
};

export const SendButton = () => {
  return (
    <Container style={{ padding: "4vh 4vw" }}>
      <Typography style={{ textAlign: "center", paddingBottom: 10 }}>
        Send Button
      </Typography>
      <Container
        style={{
          backgroundColor: "#f5f5f5",
          margin: "20px 0",
        }}
      >
        <SendButtonComponent onClick={action("button-click")} />
      </Container>
    </Container>
  );
};
