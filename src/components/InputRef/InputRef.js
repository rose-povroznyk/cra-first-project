import React, { useEffect, useRef } from 'react';

const InputRef = () => {
  const refContainer = useRef(null);

  useEffect(() => {
    refContainer.current.focus();
  }, []);

  return (
    <>
      <input type='text' placeholder='hello' ref={refContainer} />
    </>
  );
};

export default InputRef;
