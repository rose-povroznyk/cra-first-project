import { useCallback, useState } from 'react';

const Clicker = () => {
  const [clickCount, setClickCount] = useState(0);

  const clickHandler = useCallback(() => {
    setClickCount((clickCount) => clickCount + 1);
  }, []);

  return (
    <>
      <button onClick={clickHandler}>Click</button>
      <p>{clickCount}</p>
    </>
  );
};

export default Clicker;
