import React from "react";
import { Paper, Typography } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

interface MessageProps {
  text: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: "2vh 2vh",
    },
  })
);

const Message: React.FC<MessageProps> = ({ text }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper className={classes.paper} elevation={3}>
        <Typography>{text}</Typography>
      </Paper>
    </div>
  );
};

export default Message;
