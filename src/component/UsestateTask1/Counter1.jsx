import React, { useState } from "react";

const Counter1 = () => {
  const [num, setNum] = useState(0);

  const increment = () => {
    setNum(num + 1);
  };
  const decrement = () => {
    // setNum(num - 1);
    if (num > 0) {
      setNum(num - 1);
    }
  };
  return (
    <>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>Simple Counter</h1>
        <h2>{num}</h2>
        <button className="btn btn-primary" onClick={increment}>
          Increment
        </button>
        <button
          className="btn btn-danger mx-3"
          onClick={decrement}
          style={{ marginRight: "10px" }}
        >
          Decrement
        </button>
      </div>
    </>
  );
};

export default Counter1;
