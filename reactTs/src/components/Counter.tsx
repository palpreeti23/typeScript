import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState<number>(0);
  return (
    <div>
      <p> ordered Cups : {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>add one More</button>
    </div>
  );
}

export default Counter;
