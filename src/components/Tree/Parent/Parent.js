import React from 'react';
import SubParent from './SubParent/SubParent';

const Parent = (props) => {
  return (
    <div>
      {' '}
      Parent
      <SubParent />
    </div>
  );
};

export default Parent;
