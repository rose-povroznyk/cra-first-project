import React, { Component } from 'react';
import SignUpForm from './LoginForm/LoginForm';
import FormIn from './FormIn/FormIn';
import NewCounter from './NewCounter/NewCounter';
import NewCounterFn from './NewCounter/NewCounterFn';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  rerender = () => {
    this.forceUpdate();
  };

  render() {
    return <NewCounterFn rerender={this.rerender} />;
  }
}

export default App;
