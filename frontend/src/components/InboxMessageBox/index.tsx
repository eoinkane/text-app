import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Grid, Container } from "@material-ui/core";

import Avatar from "./../Avatar/";
import InboxMessage from "./../InboxMessage/";

import User from "../../models/User";
import Message from "../../models/Message";

interface InboxMessageBoxProps {
  currentUser: User;
  otherParticipant: User;
  message: Message;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    container: {
      backgroundColor: "#f5f5f5",
      maxWidth: "inherit",
      padding: "1vh 0",
    },
    inboxMessageGrid: {
      marginRight: "2vw",
    },
    avatarGrid: {
      flexBasis: 0,
      marginRight: "auto",
      marginLeft: "auto",
      marginBottom: "auto",
      marginTop: "auto",
      paddingRight: "2vw",
      paddingLeft: "2vw",
    },
  })
);

const InboxMessageBox: React.FC<InboxMessageBoxProps> = ({
  currentUser,
  otherParticipant,
  message,
}) => {
  const classes = useStyles();

  const messageSender = message.get("sender") as User;
  const sent = messageSender === currentUser;
  const recieved = messageSender === otherParticipant;

  return (
    <div className={classes.root}>
      <Container className={classes.container}>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-end"
        >
          <Grid className={classes.avatarGrid} item xs={11}>
            <Avatar user={otherParticipant} />
          </Grid>
          <Grid className={classes.inboxMessageGrid} item xs>
            <InboxMessage
              currentUser={currentUser}
              otherParticipant={otherParticipant}
              sent={sent}
              recieved={recieved}
              message={message}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default InboxMessageBox;
