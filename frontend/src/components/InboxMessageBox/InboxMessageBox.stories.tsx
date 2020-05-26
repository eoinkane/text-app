import React, { Fragment } from "react";
import InboxMessageBoxComponent from "./index";
import Message from "../../models/Message";
import User from "../../models/User";
import Typography from "@material-ui/core/Typography";

export default {
  title: "InboxMessageBox",
  component: InboxMessageBoxComponent,
};

const currentUser = new User({ firstName: "Jane", lastName: "Doe" });
const sentMessage = new Message({
  sender: currentUser,
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu consequat dui. Vivamus arcu tellus, tristique at purus ut, sagittis volutpat justo. Phasellus imperdiet ex. ",
});
const otherParticipant = new User({
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

      <InboxMessageBoxComponent
        currentUser={currentUser}
        otherParticipant={otherParticipant}
        message={recievedMessage}
      />

      <Typography style={{ textAlign: "center", paddingBottom: 10 }}>
        Sent Message
      </Typography>
      <InboxMessageBoxComponent
        currentUser={currentUser}
        otherParticipant={otherParticipant}
        message={sentMessage}
      />
    </Fragment>
  );
};

export const Sent = () => (
  <InboxMessageBoxComponent
    currentUser={currentUser}
    otherParticipant={otherParticipant}
    message={sentMessage}
  />
);

export const Recieved = () => (
  <InboxMessageBoxComponent
    currentUser={currentUser}
    otherParticipant={otherParticipant}
    message={recievedMessage}
  />
);
