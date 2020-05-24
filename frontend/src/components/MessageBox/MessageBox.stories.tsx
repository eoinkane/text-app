import React from "react";
import MessageBoxComponent from "./index";
import User from "./../../models/User";
import Message from "../../models/Message";
import { Container, Typography } from "@material-ui/core";

export default {
  title: "MessageBox",
  component: MessageBoxComponent,
};

export const MessageBox = () => {
  const sender = new User({ firstName: "Jane", lastName: "Doe" });
  const currentUser = new User({ firstName: "Alex", lastName: "Doe" });
  const message = new Message({
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu consequat dui. Vivamus arcu tellus, tristique at purus ut, sagittis volutpat justo. Phasellus imperdiet ex. ",
  });
  return (
    <Container style={{ padding: "4vh 4vw" }}>
      <Typography style={{ textAlign: "center", paddingBottom: 10 }}>
        Recieved Message
      </Typography>
      <Container
        style={{
          backgroundColor: "#f5f5f5",
          margin: "20px 0",
        }}
      >
        <MessageBoxComponent
          sender={sender}
          currentUser={currentUser}
          message={message}
        />
      </Container>

      <Typography style={{ textAlign: "center", paddingBottom: 10 }}>
        Sent Aligned Message
      </Typography>
      <Container style={{ backgroundColor: "#f5f5f5", margin: "20px 0" }}>
        <MessageBoxComponent
          sender={sender}
          currentUser={sender}
          message={message}
        />
      </Container>
    </Container>
  );
};
