import React, { useRef } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Container, Grid } from "@material-ui/core";
import TextBox from "./../TextBox";
import SendButton from "./../SendButton";
import {
  onSubmitT,
  onClickHandlerT,
  onClickHandler,
} from "./onClickHandler/onClickHandler";
export { onClickHandler as sendBoxOnClickHandler };

interface SendBoxProps {
  onClickHandler: onClickHandlerT;
  onSubmit: onSubmitT;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      minWidth: "fit-content",
    },
    container: {
      backgroundColor: "#f5f5f5",
      maxWidth: "inherit",
    },
    divider: {
      border: "5px solid #3f51b5",
      borderRadius: "20px",
    },
    sendButtonGrid: {
      padding: "0 5px",
      flexBasis: 0,
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: "auto",
      alignItems: "flex-end",
    },
    textBoxGrid: {
      flexBasis: "80.666667%",
    },
  })
);

const SendBox: React.FC<SendBoxProps> = ({ onClickHandler, onSubmit }) => {
  const classes = useStyles();
  const messageBox = useRef<HTMLInputElement>(null);

  return (
    <div className={classes.root}>
      <div className={classes.divider}></div>
      <Container className={classes.container}>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid className={classes.textBoxGrid} item xs={11}>
            <TextBox ref={messageBox} id={"message-input"} message />
          </Grid>
          <Grid className={classes.sendButtonGrid} item xs={1}>
            <SendButton
              onClick={(event) => onClickHandler(messageBox, onSubmit)}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default SendBox;
