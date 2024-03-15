import React, { Component } from 'react';
import Child from './Child';

class List extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Child name='dlfsk'>
        <h1>hello</h1>
        <p>sdfsdf</p>
      </Child>
    );
  }
}

export default List;
