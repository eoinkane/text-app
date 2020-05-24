import React, { SyntheticEvent } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { IconButton } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";

interface SendButtonProps {
  onClick: (event: SyntheticEvent) => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      padding: "10px 0",
    },
    button: {
      backgroundColor: "rgb(124, 224, 62)!important",
    },
  })
);

const SendButton: React.FC<SendButtonProps> = ({ onClick }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <IconButton onClick={onClick} className={classes.button}>
        <SendIcon />
      </IconButton>
    </div>
  );
};

export default SendButton;
