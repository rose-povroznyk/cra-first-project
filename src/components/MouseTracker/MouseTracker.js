import { useEffect, useState } from 'react';

const MouseTracker = (props) => {
  const [coordinates, setCoordinates] = useState({
    x: 0,
    y: 0,
  });

  const [counter, setCounter] = useState(0);

  const trackerHandler = (e) => {
    setCoordinates({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener('mousemove', trackerHandler);
    return () => {
      window.removeEventListener('mousemove', trackerHandler);
    };
  }, []);

  const clickHandler = () => {
    setCounter(counter + 1);
  };

  return (
    <>
      <p>X: {coordinates.x}</p>
      <p>Y: {coordinates.y}</p>
      <p>Counter: {counter}</p>
      <button onClick={clickHandler}>Click me</button>
    </>
  );
};

export default MouseTracker;
