import React, { useState } from "react";

function App({ initialProps }) {
  //   const { initialState } = initialProps;

  console.log(initialProps);

  const [_count, setCount] = useState(initialProps.count);

  return (
    <>
      <div>React Server Side rendering Example</div>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>+</button>
      <p style={{ margin: "10px 20px" }}>{_count}</p>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>-</button>
    </>
  );
}

export default App;
