import React from "react";
import TestHelperChild3 from "./TestHelperChild3";
import TestHelperChild4 from "./TestHelperChild4";

const TestHelperParentWithInit = () => {
  return (
    <div>
      <TestHelperChild3 />
      <TestHelperChild4 />
    </div>
  );
};

export default TestHelperParentWithInit;
