import React, { useState } from 'react';

let count = 0;

const NewCounterFn = (props) => {
  const [counter, setCounter] = useState(0);
  const [step, setStep] = useState(1);
  const increment = () => {
    setCounter(counter + step);
  };
  const changeHandler = ({ target: { value } }) => {
    setStep(Number(value));
  };

  return (
    <>
      {counter}
      <input type='number' value={step} onChange={changeHandler} />
      <button onClick={increment}>+</button>
    </>
  );
};

export default NewCounterFn;
