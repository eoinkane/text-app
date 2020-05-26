import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Paper, ListItemText } from "@material-ui/core";
import Message from "../../models/Message";
import User from "../../models/User";

interface InboxMessageBase {
  currentUser: User;
  otherParticipant: User;
  message: Message;
}

interface InboxMessageSent extends InboxMessageBase {
  sent: boolean;
}

interface InboxMessageRecieved extends InboxMessageBase {
  recieved: boolean;
}

type InboxMessageProps = InboxMessageSent | InboxMessageRecieved;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: "2vh 2vw",
      borderRadius: 10,
    },
    messageTypography: {
      overflow: "hidden",
      maxHeight: "3vh",
    },
  })
);

const InboxMessage: React.FC<InboxMessageProps> = ({
  currentUser,
  otherParticipant,
  message,
  ...rest
}) => {
  const classes = useStyles();

  const otherParticipantName = `${
    otherParticipant.get("firstName") as string
  } ${otherParticipant.get("lastName") as string}`;

  let prefix;
  if ((rest as Object).hasOwnProperty("recieved")) {
    if ((rest as InboxMessageRecieved).recieved) {
      const firstName = (message.get("sender") as User).get(
        "firstName"
      ) as string;
      const lastName = (message.get("sender") as User).get(
        "lastName"
      ) as string;
      prefix = `${firstName[0]}${lastName[0]}`;
    }
  } else if ((rest as Object).hasOwnProperty("sent")) {
    if ((rest as InboxMessageSent).sent) {
      prefix = `You`;
    }
  }

  const secondaryText = `${prefix}: ${message.get("message") as string}`;

  return (
    <div className={classes.root}>
      <Paper className={classes.paper} elevation={3}>
        <ListItemText
          primary={otherParticipantName}
          secondary={secondaryText}
          secondaryTypographyProps={{
            className: classes.messageTypography,
          }}
        />
      </Paper>
    </div>
  );
};

export default InboxMessage;
