import React, { Component } from 'react';
import Tree from './Tree/Tree';
import { ThemeContext } from '../contexts/themeContext';
import UserContext from '../contexts/userContext';
import CONSTANTS from '../constants';
import Square from './Square/Square';
import InputRef from './InputRef/InputRef';

const { THEMES } = CONSTANTS;

class App extends Component {
  render() {
    return (
      <>
        <InputRef />
      </>
    );
  }
}

export default App;
