import React, { useContext } from 'react';
import { withUser } from '../../../../HOC';
import UserContext from '../../../../../../contexts/userContext';

// const InnerChild = (props) => {
//   const { user, logOut } = props;
//   const { firsName, lastName, email } = user;
//   return (
//     <div>
//       I am inner child
//       <p>
//         {firsName} {lastName} {email}
//       </p>
//       <button onClick={logOut}>Log out</button>
//     </div>
//   );
// };

const InnerChild = (props) => {
  const value = useContext(UserContext);

  const { logOut } = value;
  const { firsName, lastName, email } = value.user;

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
