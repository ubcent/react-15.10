import './Button.scss';

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import ReactDom from "react-dom";

import Form from '../Form';

export default class Button extends Component{
  static propTypes = {
    text: PropTypes.string,
    type: PropTypes.string
  };

  static defaultProps = {
    text: 'Button',
    type: 'default'
  };

  render() {
    const {text, type} = this.props;

    const className = 'button button-' + type;

    return (
      <button className={className} onClick={() => this.clickButton()}>{text}</button>
    )
  }

  clickButton() {
    const {text, type} = this.props;

    let method = 'GET';
    let url = '';
    let fields = [];

    if (type === 'login'){
      method = 'POST';

      fields = [
        {name: 'login'},
        {name: 'password'}
      ];
    }

    const substrate = document.createElement('div');
    substrate.classList.add('substrate');
    document.body.appendChild(substrate);

    ReactDom.render(<Form method = {method} url = {url} fields = {fields} type = {type}/>, substrate);
  }
}