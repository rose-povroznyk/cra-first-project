import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    console.log('constructor');

    this.state = {
      count: 0,
    };

    this.intervalId = null;
  }

  start() {
    this.intervalId = setInterval(
      () => this.setState({ count: this.state.count + 1 }),
      1000
    );
    console.log(this.intervalId);
  }

  componentDidMount() {
    this.start();
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate');
  }

  shouldComponentUpdate() {
    console.log('shouldComponentUpdate');
    return true;
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
    console.log('willUnmount');
  }

  render() {
    console.log('render');
    return (
      <>
        <h1>{this.state.count}</h1>
        {/* <button onClick={() => this.start()}>Start</button> */}
      </>
    );
  }
}

export default Counter;
