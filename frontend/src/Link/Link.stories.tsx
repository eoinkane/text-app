import React from "react";
import LinkComponent from "./Link";

export default {
  title: "Link",
  component: LinkComponent,
};

export const Link = () => (
  <LinkComponent href="http://google.com">Link to Google</LinkComponent>
);
