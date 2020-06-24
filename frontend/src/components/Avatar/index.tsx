import React, { Fragment } from "react";
import User from "../../models/User/";
import { Avatar as MaterialUIAvatar } from "@material-ui/core";

interface IAvatarProps {
  user: User;
}

const Avatar: React.FC<IAvatarProps> = ({ user }) => {
  const firstName = user.get("firstName") as string;
  const lastName = user.get("lastName") as string;
  const initals =
    !firstName || !lastName ? null : `${firstName[0]}${lastName[0]}`;
  return (
    <Fragment>
      <MaterialUIAvatar>{initals}</MaterialUIAvatar>
    </Fragment>
  );
};

export default Avatar;
