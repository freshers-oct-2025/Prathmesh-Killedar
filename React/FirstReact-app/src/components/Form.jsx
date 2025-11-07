import React, { useState } from "react";

const Form = () => {
  const [count, setCount] = useState(0);

  const addCount = () => {
    setCount(count + 1);
  };

  const subCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const reset = () => {
    setCount(0);
  };
  return (
    <>
      <h3>Count :{count}</h3>
      <button onClick={addCount}>Add</button>
      <button onClick={subCount}>Substract</button>
      <button onClick={reset}>Reset</button>
    </>
  );
};

export default Form;

