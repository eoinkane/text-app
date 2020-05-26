import React from "react";
import InboxMessageComponent from "./index";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

export default {
  title: "InboxMessage",
  component: InboxMessageComponent,
};

export const InboxMessage = () => {
  const text =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu consequat dui. Vivamus arcu tellus, tristique at purus ut, sagittis volutpat justo. Phasellus imperdiet ex. ";
  return (
    <Container style={{ padding: "4vh 4vw" }}>
      <Typography
        style={{
          textAlign: "center",
          paddingBottom: 10,
        }}
      >
        Inbox Message
      </Typography>
      <Container
        style={{
          backgroundColor: "#f5f5f5",
          padding: "20px 20px",
          margin: "20px 0",
        }}
      >
        <InboxMessageComponent>{text}</InboxMessageComponent>
      </Container>
    </Container>
  );
};
