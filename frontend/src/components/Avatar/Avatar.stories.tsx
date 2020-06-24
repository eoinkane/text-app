import React from "react";
import User from "../../models/User/";
import AvatarComponent from "./index";

export default {
  title: "Avatar",
  component: AvatarComponent,
};

export const AvatarWithFullUser = () => {
  const user = new User();
  user.init({
    id: 0,
    username: "test",
    firstName: "Jane",
    lastName: "Doe",
  });
  return <AvatarComponent user={user} />;
};
