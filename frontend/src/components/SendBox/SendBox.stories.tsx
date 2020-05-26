import React from "react";
import SendBoxComponent from "./index";
import { onClickHandler } from "./onClickHandler/onClickHandler";
import { action } from "@storybook/addon-actions";
import Typography from "@material-ui/core/Typography";

export default {
  title: "SendBox",
  component: SendBoxComponent,
};

export const SendBox = () => {
  return (
    <>
      <Typography style={{ textAlign: "center", paddingBottom: 10 }}>
        Send Box
      </Typography>
      <SendBoxComponent
        onClickHandler={onClickHandler}
        onSubmit={action("submit")}
      />
    </>
  );
};
