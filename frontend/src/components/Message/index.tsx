import React from "react";
import cx from "clsx";
import { Paper, Typography } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

interface MessagePropsBase {
  text: string;
}

interface MessagePropsLeft extends MessagePropsBase {
  left: boolean;
}

interface MessagePropsRight extends MessagePropsBase {
  right: boolean;
}

type MessageProps = MessagePropsLeft | MessagePropsRight;

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      maxWidth: "85%",
      padding: "10px 0",
    },
    left: {
      marginRight: "auto",
    },
    right: {
      marginLeft: "auto",
    },
    paper: {
      padding: "2vh 2vh",
      borderRadius: 10,
    },
  })
);

const Message: React.FC<MessageProps> = ({ text, ...rest }) => {
  const classes = useStyles();
  return (
    <div
      className={cx(
        classes.root,
        {
          [classes.left]:
            rest.hasOwnProperty("left") && (rest as MessagePropsLeft).left,
        },
        {
          [classes.right]:
            rest.hasOwnProperty("right") && (rest as MessagePropsRight).right,
        }
      )}
    >
      <Paper className={classes.paper} elevation={3}>
        <Typography>{text}</Typography>
      </Paper>
    </div>
  );
};

export default Message;
