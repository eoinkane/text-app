import React from "react";
import InboxMessageComponent from "./index";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Message from "../../models/Message";
import User from "../../models/User";

export default {
  title: "InboxMessage",
  component: InboxMessageComponent,
};

export const InboxMessage = () => {
  const currentUser = new User();
  currentUser.init({
    username: "test",
    id: 0,
    firstName: "Jane",
    lastName: "Doe",
  });
  const sentMessage = new Message({
    sender: currentUser,
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu consequat dui. Vivamus arcu tellus, tristique at purus ut, sagittis volutpat justo. Phasellus imperdiet ex. ",
  });
  const otherParticipant = new User();
  otherParticipant.init({
    username: "test",
    id: 0,
    firstName: "John",
    lastName: "Appleseed",
  });
  const recievedMessage = new Message({
    sender: otherParticipant,
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu consequat dui. Vivamus arcu tellus, tristique at purus ut, sagittis volutpat justo. Phasellus imperdiet ex. ",
  });
  return (
    <Container style={{ padding: "4vh 4vw" }}>
      <Typography
        style={{
          textAlign: "center",
          paddingBottom: 10,
        }}
      >
        Sent Inbox Message
      </Typography>
      <Container
        style={{
          backgroundColor: "#f5f5f5",
          padding: "20px 20px",
          margin: "20px 0",
        }}
      >
        <InboxMessageComponent
          sent
          otherParticipant={otherParticipant}
          message={sentMessage}
        />
      </Container>

      <Typography
        style={{
          textAlign: "center",
          paddingBottom: 10,
        }}
      >
        Recieved Inbox Message
      </Typography>
      <Container
        style={{
          backgroundColor: "#f5f5f5",
          padding: "20px 20px",
          margin: "20px 0",
        }}
      >
        <InboxMessageComponent
          recieved
          otherParticipant={otherParticipant}
          message={recievedMessage}
        />
      </Container>
    </Container>
  );
};
