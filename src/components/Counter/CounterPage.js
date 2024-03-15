import React, { Component } from 'react';
import Counter from './Counter';

class CounterPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isMount: true,
    };
  }

  clickHandler() {
    this.setState({
      isMount: !this.state.isMount,
    });
  }

  render() {
    return (
      <>
        <button onClick={() => this.clickHandler()}>Unmount Counter</button>
        {this.state.isMount === true ? <Counter /> : null}
      </>
    );
  }
}

export default CounterPage;
