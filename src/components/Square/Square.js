import React, { useRef, useState } from 'react';

const Square = () => {
  const [number, setNumber] = useState(1);
  const refContainer = useRef(null);
  console.log(refContainer);

  const changeHandler = ({ target: { value } }) => {
    setNumber(Number(value));
    console.log(value);

    const { current } = refContainer;
    if (value >= 1 && value <= 10) {
      current.style.backgroundColor = 'green';
    } else if (value >= 11 && value <= 30) {
      current.style.backgroundColor = 'yellow';
    } else if (value > 30) {
      current.style.backgroundColor = 'red';
      current.style.color = 'white';
    }
  };

  return (
    <>
      <h1>Number square</h1>
      <input
        type='number'
        placeholder='Enter number'
        value={number}
        onChange={changeHandler}
        ref={refContainer}
      />
      <p>Square: {number ** 2}</p>
    </>
  );
};

export default Square;
