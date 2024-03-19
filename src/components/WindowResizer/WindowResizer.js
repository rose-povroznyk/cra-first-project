import React, { Component } from 'react';

class WindowResizer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0,
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.eventHandler);
  }

  eventHandler = () => {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  componentWillUnmount() {
    window.removeEventListener('resize', this.eventHandler);
  }

  render() {
    const { height, width } = this.state;
    return (
      <div>
        <p>Current width: {width}</p>
        <p>Current width: {height}</p>
      </div>
    );
  }
}

export default WindowResizer;
