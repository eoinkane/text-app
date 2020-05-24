import React from "react";
import Avatar from "./../Avatar";
import MessageComponent from "./../Message";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import User from "../../models/User";
import Message from "../../models/Message";
import { Grid } from "@material-ui/core";

interface MessageBoxProps {
  sender: User;
  currentUser: User;
  message: Message;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      padding: "10px 0",
    },
    rightAvatarGrid: {
      flexBasis: 0,
    },
  })
);

const MessageBox: React.FC<MessageBoxProps> = ({
  sender,
  currentUser,
  message,
}) => {
  const classes = useStyles();
  const messageSentByCurrentUser = sender === currentUser;
  return (
    <div className={classes.root}>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-end"
      >
        {!messageSentByCurrentUser ? (
          <Grid item xs={1}>
            <Avatar user={sender} />
          </Grid>
        ) : null}
        <Grid item xs={11}>
          <MessageComponent
            left={!messageSentByCurrentUser}
            right={messageSentByCurrentUser}
          >
            {message.get("message") as string}
          </MessageComponent>
        </Grid>
        {messageSentByCurrentUser ? (
          <Grid className={classes.rightAvatarGrid} item xs={1}>
            <Avatar user={sender} />
          </Grid>
        ) : null}
      </Grid>
    </div>
  );
};

export default MessageBox;
