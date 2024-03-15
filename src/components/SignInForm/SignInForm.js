import React, { Component } from 'react';
import './style.css';

class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      isEmailValid: true,
    };
  }

  universalChangeHandler = ({ target: { value, name } }) => {
    this.setState({
      [name]: value,
    });
  };

  submitHandler = (event) => {
    event.preventDefault();
    console.log(this.state);

    if (!this.state.email.includes('@')) {
      this.setState({ isEmailValid: false });
    } else {
      this.setState({ isEmailValid: true });
    }
  };

  render() {
    const { email, password, isEmailValid } = this.state;

    return (
      <>
        <h1>Sign in Form</h1>
        <form className='form-wrapper' onSubmit={this.submitHandler}>
          <label>
            Type your email:
            <input
              type='text'
              name='email'
              value={email}
              onChange={this.universalChangeHandler}
              className={isEmailValid ? '' : 'invalid'}
            ></input>
          </label>
          <label>
            Type your password:
            <input
              type='password'
              name='password'
              value={password}
              onChange={this.universalChangeHandler}
            ></input>
          </label>
          <button type='submit'>Send form</button>
        </form>
      </>
    );
  }
}

export default SignInForm;
