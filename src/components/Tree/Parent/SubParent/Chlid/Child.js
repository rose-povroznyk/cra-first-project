import React from 'react';
import InnerChild from './InnerChild/InnerChild';
import UserContext from '../../../../../contexts/userContext';

const Child = () => {
  return (
    <UserContext.Consumer>
      {({ user: { avatar, firsName } }) => {
        return (
          <div>
            <img
              src={avatar}
              style={{ width: '150px', height: '300px', objectFit: 'cover' }}
            />
            Child {firsName}
            <InnerChild />
          </div>
        );
      }}
    </UserContext.Consumer>
  );
};

export default Child;
