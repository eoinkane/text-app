import React from "react";
import HeaderBarComponent from "./index";
import { linkTo } from "@storybook/addon-links";
import StoryRouter from "storybook-react-router";

export default {
  title: "Header Bar",
  component: HeaderBarComponent,
  decorators: [
    StoryRouter({
      "/HeaderBar": linkTo("Header Bar", "HeaderBar"),
    }),
  ],
};

export const HeaderBar = () => <HeaderBarComponent />;
