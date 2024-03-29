import { format, addSeconds } from 'date-fns';
import React, { useEffect, useState } from 'react';

const CounterH = () => {
  const [time, setTime] = useState(new Date(0, 0, 0, 0, 0, 0, 0));
  const [isRunning, setIsRunning] = useState(true);
  let intervalId = null;

  useEffect(() => {
    if (isRunning) {
      intervalId = setInterval(() => {
        setTime((time) => addSeconds(time, 1));
      }, 1000);
    }
    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning]);

  const switchRunning = () => {
    setIsRunning(!isRunning);
  };

  const clearHandler = () => {
    setTime(new Date(0, 0, 0, 0, 0, 0, 0));
  };

  return (
    <>
      <h1>{format(time, 'HH:mm:ss')}</h1>
      <button onClick={switchRunning}> {isRunning ? 'stop' : 'start'}</button>
      <button onClick={clearHandler}>clear</button>
    </>
  );
};

export default CounterH;
