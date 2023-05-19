import * as React from "react";
import Counter from "./Counter";

// React.lazy only supports Default exports.
// const RemoteCounter = React.lazy(() => import("container/Counter"));

const Script = () => {
  const [count, setCount] = React.useState(1);

  return (
    <div>
      {/* <h2> Microfrontend Container application</h2> */}
      <Counter counter={count} onIncrease={() => setCount(count + 1)} />
    </div>
  );
};

export default Script;

