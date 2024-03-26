import React, { Component } from 'react';
import NewUserList from './UserList/NewUserList';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return <NewUserList />;
  }
}

export default App;
