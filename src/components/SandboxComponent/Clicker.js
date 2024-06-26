import { useCallback, useState, useMemo } from 'react';

const Clicker = () => {
  const [clickCount, setClickCount] = useState(0);
  const [inputValue, setInputValue] = useState('');

  const clickHandler = useCallback(() => {
    setClickCount((clickCount) => clickCount + 1);
  }, []);

  const changeHandler = useCallback(({ target: { value } }) => {
    setInputValue(Number(value));
  }, []);

  const logValueHandler = () => {
    let sum = 0;
    for (let i = 0; i < inputValue; i++) {
      sum += i;
    }

    console.log(sum);
    console.log(inputValue);
  };

  const memoizedValue = useMemo(() => logValueHandler, [inputValue]);

  //   const logValueHandler = useCallback(() => {
  //     let sum = 0;
  //     for (let i = 0; i < inputValue; i++) {
  //       sum += i;
  //     }

  //     console.log(sum);
  //     console.log(inputValue);
  //   }, [inputValue]);

  return (
    <>
      <h1>{clickCount}</h1>
      <button onClick={clickHandler}>Click</button>
      <input
        type='text'
        value={inputValue}
        onChange={changeHandler}
        placeholder='enter number for max value'
      />
      <button onClick={logValueHandler}>Find sum</button>
    </>
  );
};

export default Clicker;
