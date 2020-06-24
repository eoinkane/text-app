import React from "react";
import { useCurrentUser } from "./../index";

const TestHelperChild3 = () => {
  const { initUser } = useCurrentUser("TestHelperChild3");
  return (
    <>
      <button
        onClick={() => {
          (async () => {
            await initUser({
              username: "test_user",
              password: "test_password",
              firstName: "test",
              lastName: "user",
            });
          })();
        }}
      >
        Init Current User
      </button>
    </>
  );
};

export default TestHelperChild3;
