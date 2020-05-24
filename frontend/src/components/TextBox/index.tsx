import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

interface TextBoxPropsBase {
  id: string;
}

interface TextBoxPropsMessage extends TextBoxPropsBase {
  message: boolean;
}

interface TextBoxPropsUser extends TextBoxPropsBase {
  user: boolean;
  product: string;
}

interface TextBoxPropsPassword extends TextBoxPropsBase {
  password: boolean;
}

type TextBoxProps =
  | TextBoxPropsMessage
  | TextBoxPropsUser
  | TextBoxPropsPassword;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      width: "100%",
      padding: "10px 0",
    },
    textField: {
      width: "100%",
      backgroundColor: "rgb(255, 255, 255)",
      borderRadius: 10,
    },
  })
);

const TextBox: React.FC<TextBoxProps> = ({ id, ...rest }) => {
  const classes = useStyles();

  let rows = 1;
  let type: "password" | undefined = undefined;
  let product = "value";
  let multiline = true;

  if ((rest as Object).hasOwnProperty("password")) {
    if ((rest as TextBoxPropsPassword).password) {
      product = "password";
      type = "password";
      rows = 1;
      multiline = false;
    }
  } else if ((rest as Object).hasOwnProperty("user")) {
    if ((rest as TextBoxPropsUser).user) {
      product = (rest as TextBoxPropsUser).product;
      rows = 1;
      multiline = true;
    }
  } else if ((rest as Object).hasOwnProperty("message")) {
    if ((rest as TextBoxPropsMessage).message) {
      product = "message";
      rows = 4;
      multiline = true;
    }
  }

  return (
    <div className={classes.root}>
      <TextField
        className={classes.textField}
        id={id}
        label={`Enter your ${product} here`}
        multiline={multiline}
        rows={rows}
        variant="outlined"
        type={type}
      />
    </div>
  );
};

export default TextBox;
