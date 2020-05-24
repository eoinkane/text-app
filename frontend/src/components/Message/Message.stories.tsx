import React from "react";
import MessageComponent from "./index";
import Container from "@material-ui/core/Container";

export default {
  title: "Message",
  component: MessageComponent,
};

export const Message = () => {
  const text =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu consequat dui. Vivamus arcu tellus, tristique at purus ut, sagittis volutpat justo. Phasellus imperdiet ex. ";
  return (
    <Container style={{ backgroundColor: "#f5f5f5", padding: "4vh 4vw" }}>
      <MessageComponent text={text} />
    </Container>
  );
};
