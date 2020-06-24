import React from "react";
import HeaderBarComponent from "./index";
import { linkTo } from "@storybook/addon-links";
import StoryRouter from "storybook-react-router";

import {
  LoadingContextProvider,
  useLoading,
} from "./../../contexts/LoadingContext";

export default {
  title: "Header Bar",
  component: HeaderBarComponent,
  decorators: [
    StoryRouter({
      "/HeaderBar": linkTo("Header Bar", "HeaderBar"),
    }),
  ],
};

export const Default = () => (
  <LoadingContextProvider>
    <HeaderBarComponent />
  </LoadingContextProvider>
);

const LoadingSpinnerOnHelper = () => {
  const { loadingActions } = useLoading("LoadingSpinner");
  loadingActions.ON();
  return <HeaderBarComponent />;
};

export const LoadingSpinnerOn = () => (
  <LoadingContextProvider>
    <LoadingSpinnerOnHelper />
  </LoadingContextProvider>
);
