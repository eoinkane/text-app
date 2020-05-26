import React from "react";

export type onSubmitT = (message: string) => void;

export type onClickHandlerT = (
  messageBox: React.RefObject<HTMLInputElement>,
  onSubmit: onSubmitT
) => void;

export const onClickHandler: onClickHandlerT = (
  messageBox: React.RefObject<HTMLInputElement>,
  onSubmit: onSubmitT
) => {
  if (messageBox && messageBox.current) {
    onSubmit(messageBox.current.value);
  }
};
