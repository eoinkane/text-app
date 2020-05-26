import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Paper, Typography } from "@material-ui/core";

interface InboxMessageProps {}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: "2vh 2vw",
      borderRadius: 10,
    },
  })
);

const InboxMessage: React.FC<InboxMessageProps> = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper className={classes.paper} elevation={3}>
        <Typography>{children}</Typography>
      </Paper>
    </div>
  );
};

export default InboxMessage;
