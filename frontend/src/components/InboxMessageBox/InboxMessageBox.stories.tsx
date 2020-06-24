import React, { Fragment } from "react";
import InboxMessageBoxComponent from "./index";
import Message from "../../models/Message";
import User from "../../models/User";
import Typography from "@material-ui/core/Typography";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

export default {
  title: "InboxMessageBox",
  component: InboxMessageBoxComponent,
};

const currentUser = new User();
currentUser.init({
  id: 0,
  username: "test",
  firstName: "test",
  lastName: "user",
});
const sentMessage = new Message({
  sender: currentUser,
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu consequat dui. Vivamus arcu tellus, tristique at purus ut, sagittis volutpat justo. Phasellus imperdiet ex. ",
});
const otherParticipant = new User();
otherParticipant.init({
  id: 0,
  username: "test",
  firstName: "John",
  lastName: "Appleseed",
});
const recievedMessage = new Message({
  sender: otherParticipant,
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu consequat dui. Vivamus arcu tellus, tristique at purus ut, sagittis volutpat justo. Phasellus imperdiet ex. ",
});

export const InboxMessageBox = () => {
  return (
    <Fragment>
      <Typography style={{ textAlign: "center", paddingBottom: 10 }}>
        Recieved Message
      </Typography>
      <CurrentUserContext.Provider
        value={{
          currentUser: currentUser,
          initUser: () => {
            return Promise.resolve();
          },
          error: false,
        }}
      >
        <InboxMessageBoxComponent
          otherParticipant={otherParticipant}
          message={recievedMessage}
        />
      </CurrentUserContext.Provider>

      <Typography style={{ textAlign: "center", paddingBottom: 10 }}>
        Sent Message
      </Typography>
      <CurrentUserContext.Provider
        value={{
          currentUser: currentUser,
          initUser: () => {
            return Promise.resolve();
          },
          error: false,
        }}
      >
        <InboxMessageBoxComponent
          otherParticipant={otherParticipant}
          message={sentMessage}
        />
      </CurrentUserContext.Provider>
    </Fragment>
  );
};

export const Sent = () => (
  <CurrentUserContext.Provider
    value={{
      currentUser: currentUser,
      initUser: () => {
        return Promise.resolve();
      },
      error: false,
    }}
  >
    <InboxMessageBoxComponent
      otherParticipant={otherParticipant}
      message={sentMessage}
    />
  </CurrentUserContext.Provider>
);

export const Recieved = () => (
  <CurrentUserContext.Provider
    value={{
      currentUser: currentUser,
      initUser: () => {
        return Promise.resolve();
      },
      error: false,
    }}
  >
    <InboxMessageBoxComponent
      otherParticipant={otherParticipant}
      message={recievedMessage}
    />
  </CurrentUserContext.Provider>
);
