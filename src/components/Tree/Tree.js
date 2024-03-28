import React from 'react';

import cx from 'classnames';
import Parent from './Parent/Parent';
import { ThemeContext } from '../../contexts/themeContext';
import style from './Tree.module.css';
import CONSTANTS from '../../constants';
import { useContext } from 'react';

const { THEMES } = CONSTANTS;

const Tree = (props) => {
  const { theme } = useContext(ThemeContext);
  const classNames = cx(style.container, {
    [style.lightTheme]: theme === THEMES.LIGHT,
    [style.darkTheme]: theme === THEMES.DARK,
  });
  return (
    <div className={classNames}>
      Tree
      <Parent />
    </div>
  );
};

// const Tree = (props) => {
//   const classNames = cx(style.container, {
//     [style.lightTheme]: props.theme === THEMES.LIGHT,
//     [style.darkTheme]: props.theme === THEMES.DARK,
//   });
//   return (
//     <div className={classNames}>
//       Tree
//       <Parent />
//     </div>
//   );
// };

const withTheme = (Component) => (props) => {
  {
    return (
      <ThemeContext.Consumer>
        {({ theme, setTheme }) => {
          return <Component theme={theme} setTheme={setTheme} />;
        }}
      </ThemeContext.Consumer>
    );
  }
};

const TreeWithTheme = withTheme(Tree);

export default Tree;

// export const TreeWithTheme = (props) => {
//   return (
//     <ThemeContext.Consumer>
//       {({ theme, setTheme }) => {
//         return <Tree theme={theme} setTheme={setTheme} />;
//       }}
//     </ThemeContext.Consumer>
//   );
// };
