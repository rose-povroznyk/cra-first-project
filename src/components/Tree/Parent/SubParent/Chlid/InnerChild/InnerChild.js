import React from 'react';
import UserContext from '../../../../../../contexts/userContext';

const InnerChild = (props) => {
  return (
    <UserContext.Consumer>
      {({ firsName, lastName, avatar, email }) => {
        return (
          <div style={{ border: '3px solid black', padding: '25px' }}>
            I am inner child
            <img
              src={avatar}
              style={{ width: '150px', height: '300px', objectFit: 'cover' }}
            />
            <p>
              {firsName} {lastName} {email}
            </p>
          </div>
        );
      }}
    </UserContext.Consumer>
  );
};

export default InnerChild;
