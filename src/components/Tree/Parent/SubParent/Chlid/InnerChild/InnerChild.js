import React from 'react';
import { withUser } from '../../../../HOC';

const InnerChild = (props) => {
  const { user, logOut } = props;
  const { firsName, lastName, email } = user;
  return (
    <div>
      I am inner child
      <p>
        {firsName} {lastName} {email}
      </p>
      <button onClick={logOut}>Log out</button>
    </div>
  );
};

export default withUser(InnerChild);
