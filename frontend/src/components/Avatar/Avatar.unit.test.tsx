import React from "react";
import { shallow } from "enzyme";
import User from "./../../models/User";
import Avatar from "./index";

import MaterialUIAvatar from "@material-ui/core/Avatar";

describe("Avatar", () => {
  it("Renders", () => {
    const user = new User({ firstName: "Jane", lastName: "Doe" });
    const avatar = shallow(<Avatar user={user} />);
    expect(avatar).toMatchSnapshot();
  });

  it("Renders with correct text when first name & last name are passed", () => {
    const user = new User({ firstName: "Jane", lastName: "Doe" });
    const firstName = user.get("firstName") as string;
    const lastName = user.get("lastName") as string;
    const initials = `${firstName[0]}${lastName[0]}`;
    const avatar = shallow(<Avatar user={user} />);

    expect(avatar).toMatchSnapshot();
    expect(avatar.find(MaterialUIAvatar).text()).toEqual(initials);
  });
});
