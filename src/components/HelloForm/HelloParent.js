import { Component } from 'react';
import HelloForm from './HelloForm';

class HelloParent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Anonym',
    };
  }

  getStateFromChild = (username) => {
    this.setState({
      name: username,
    });
  };

  render() {
    const { name } = this.state;
    return (
      <>
        <HelloForm sendUserNameToParent={this.getStateFromChild} />
        <p>Hello {name}</p>
      </>
    );
  }
}

export default HelloParent;
