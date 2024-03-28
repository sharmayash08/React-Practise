import { useState } from "react";
const Example = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1>UseState hook Example</h1>
      <p>count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default Example;
