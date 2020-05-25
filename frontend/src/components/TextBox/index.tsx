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

  type textAreaProps = {
    rows: number;
  };

  let type: "password" | undefined = undefined;
  let product = "value";
  let multiline = true;
  let textFieldProps: {} | textAreaProps;

  if ((rest as Object).hasOwnProperty("password")) {
    if ((rest as TextBoxPropsPassword).password) {
      product = "password";
      type = "password";
      multiline = false;
      textFieldProps = {
        rows: 1,
      };
    }
  } else if ((rest as Object).hasOwnProperty("user")) {
    if ((rest as TextBoxPropsUser).user) {
      product = (rest as TextBoxPropsUser).product;
      multiline = true;
      textFieldProps = {
        rows: 1,
      };
    }
  } else if ((rest as Object).hasOwnProperty("message")) {
    if ((rest as TextBoxPropsMessage).message) {
      product = "message";
      multiline = true;
      textFieldProps = {};
    }
  }

  return (
    <div className={classes.root}>
      <TextField
        className={classes.textField}
        id={id}
        label={`Enter your ${product} here`}
        multiline={multiline}
        variant="outlined"
        type={type}
        {...textFieldProps!}
      />
    </div>
  );
};

export default TextBox;
