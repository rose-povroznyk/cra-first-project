import React from 'react';
import Child from './Chlid/Child';
import { ThemeContext } from '../../../../contexts/themeContext';
import CONSTANTS from '../../../../constants';
import UserContext from '../../../../contexts/userContext';
import { withTheme, withUser } from '../../HOC';

const { THEMES } = CONSTANTS;

const SubParent = (props) => {
  return (
    <UserContext.Consumer>
      {({ user, logOut }) => {
        return (
          <ThemeContext.Consumer>
            {({ theme, setTheme }) => {
              return <SubParentWithTheme theme={theme} setTheme={setTheme} />;
            }}
          </ThemeContext.Consumer>
        );
      }}
    </UserContext.Consumer>
  );
};

const SubParentWithTheme = (props) => {
  const nextTheme = props.theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;
  return (
    <div>
      SubParent
      {/* <p>{user.firsName}</p> */}
      <button onClick={() => props.setTheme(nextTheme)}>
        Click to change them
      </button>
      <Child />
    </div>
  );
};

export default SubParent;
