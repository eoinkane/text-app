import React from "react";
import { useCurrentUser } from "./../index";
import { passCurrentUserFn } from "./../CurrentUserContext.unit.test";

const TestHelperChild4 = () => {
  const { currentUser } = useCurrentUser("TestCurrentUser");
  return (
    <>
      <button
        onClick={() => {
          passCurrentUserFn(currentUser);
        }}
      >
        Print Current User From Diff
      </button>
    </>
  );
};

export default TestHelperChild4;
