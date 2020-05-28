import React from "react";
import HeaderBarComponent from "./index";
import { linkTo } from "@storybook/addon-links";
import StoryRouter from "storybook-react-router";

import {
  LoadingContextProvider,
  useLoading,
  types,
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
  const { dispatch } = useLoading("LoadingSpinner");
  dispatch({ type: types.ON });
  return <HeaderBarComponent />;
};

export const LoadingSpinnerOn = () => (
  <LoadingContextProvider>
    <LoadingSpinnerOnHelper />
  </LoadingContextProvider>
);
