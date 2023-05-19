
import * as React from "react";

// React.lazy only supports Default exports.
const RemoteCounter = React.lazy(() => import("container/Counter"));

const Script = () => {
  const [count, setCount] = React.useState(11);

  return (
    <div>
      <h2>Main application</h2>
      <React.Suspense fallback="Loading remote component">
        <RemoteCounter counter={count} onIncrease={() => setCount(count + 1)} />
      </React.Suspense>
    </div>
  );
};

export default Script;
