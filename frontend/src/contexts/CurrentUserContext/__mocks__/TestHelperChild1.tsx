import React from "react";
import { useCurrentUser } from "./../index";
import TestHelperChild2 from "./TestHelperChild2";

const TestHelperChild1 = () => {
  const { currentUser } = useCurrentUser("TestHelper");
  return (
    <>
      <TestHelperChild2 testProp={currentUser} />
    </>
  );
};

export default TestHelperChild1;
