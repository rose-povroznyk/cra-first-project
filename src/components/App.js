import React, { Component } from 'react';
import Tree from './Tree/Tree';
import UserContext from '../contexts/userContext';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        firsName: 'John',
        lastName: 'Soe',
        email: 'sdlfk@gmail.com',
        avatar: 'https://wallpapershome.ru/images/pages/pic_h/25298.jpeg',
      },
    };
  }

  render() {
    console.log(UserContext);
    return (
      <UserContext.Provider value={this.state.user}>
        <Tree />
      </UserContext.Provider>
    );
  }
}

export default App;
