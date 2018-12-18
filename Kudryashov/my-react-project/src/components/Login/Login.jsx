import './Login.css';

import React, { Component, Fragment } from 'react';

export default class Login extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        <button className="login" onClick={this.props.onClick}>ВХОД</button>
      </Fragment>
    )
  }
}