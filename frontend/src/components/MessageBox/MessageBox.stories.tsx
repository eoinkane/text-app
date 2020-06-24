import React from "react";
import MessageBoxComponent from "./index";
import User from "../../models/User";
import Message from "../../models/Message";
import { Container, Typography } from "@material-ui/core";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

export default {
  title: "MessageBox",
  component: MessageBoxComponent,
};

const sender = new User();
sender.init({
  username: "test",
  id: 0,
  firstName: "Alex",
  lastName: "Doe",
});

const currentUser = new User();
currentUser.init({
  username: "test_user",
  id: 0,
  firstName: "test",
  lastName: "user",
});

const message = new Message({
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu consequat dui. Vivamus arcu tellus, tristique at purus ut, sagittis volutpat justo. Phasellus imperdiet ex. ",
});

export const MessageBox = () => {
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
        <CurrentUserContext.Provider
          value={{
            currentUser: currentUser,
            initUser: () => {
              return Promise.resolve();
            },
            error: false,
          }}
        >
          <MessageBoxComponent sender={sender} message={message} />
        </CurrentUserContext.Provider>
      </Container>

      <Typography style={{ textAlign: "center", paddingBottom: 10 }}>
        Sent Aligned Message
      </Typography>
      <Container style={{ backgroundColor: "#f5f5f5", margin: "20px 0" }}>
        <CurrentUserContext.Provider
          value={{
            currentUser: currentUser,
            initUser: () => {
              return Promise.resolve();
            },
            error: false,
          }}
        >
          <MessageBoxComponent sender={currentUser} message={message} />
        </CurrentUserContext.Provider>
      </Container>
    </Container>
  );
};
