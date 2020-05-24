import React from "react";
import User from "./../../models/User";
import AvatarComponent from "./index";

export default {
  title: "Avatar",
  component: AvatarComponent,
};

export const AvatarWithFullUser = () => {
  const user = new User({ firstName: "Jane", lastName: "Doe" });
  return <AvatarComponent user={user} />;
};

export const AvatarWithoutFirstName = () => {
  const user = new User({ lastName: "Doe" });
  return <AvatarComponent user={user} />;
};

export const AvatarWithoutLastName = () => {
  const user = new User({ lastName: "Doe" });
  return <AvatarComponent user={user} />;
};
