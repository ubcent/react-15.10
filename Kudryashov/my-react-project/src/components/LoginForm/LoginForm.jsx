import './LoginForm.css';

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

export default class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loginName: '',
      password: '',
    };
  }

  static propTypes = {
    onSend: PropTypes.func,
  }

  handleChange = (e) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleClick = () => {
    const { onSend } = this.props;

    this.setState({password: ''});

    if(typeof onSend === 'function') {
      onSend(this.state);
    }
  }

  render() {
    const { loginName, password } = this.state;
    return(
      <form className="login-form">
      <label htmlFor="login-name">Your name:</label>
      <input onChange={this.handleChange} name="loginName" value={loginName} type="text" id="login-name"></input>
      <label htmlFor="password">Password:</label>
      <input onChange={this.handleChange} name="password" value={password} type="password" id="password"></input>
      <button onClick={this.handleClick} id="login-button">Log In</button>
      </form>
    )
  }
}