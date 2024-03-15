import { Component } from 'react';

class HelloForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
    };
  }

  submitHandler = (event) => {
    event.preventDefault();
    const { sendUserNameToParent } = this.props;
    const { name } = this.state;
    sendUserNameToParent(name);
  };

  changeHandler = ({ target: { value } }) => {
    this.setState({ name: value });
  };

  render() {
    const { name } = this.state;
    return (
      <form onSubmit={this.submitHandler}>
        <input
          type='text'
          placeholder='Type your name'
          value={name}
          onChange={this.changeHandler}
        />
        <button type='submit'>Send</button>
      </form>
    );
  }
}

export default HelloForm;
