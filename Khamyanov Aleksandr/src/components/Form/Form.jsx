import './Form.scss';

import React, { Component } from 'react';

import Button from '../Button';
import PropTypes from "prop-types";

export default class Form extends Component {
  static propTypes = {
    method: PropTypes.string,
    url: PropTypes.string,
    fields: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
      })
    ),
    type: PropTypes.string
  };

  static defaultProps = {
    method: 'GET',
    url: '',
    fields: [],
    type: ''
  };

  render() {
    const {method, url, fields, type} = this.props;

    return (
        <form method = {method} action = {url} className = {'form-' + type}>
        {fields.map((field) =>
            <div className = {field.name + '-block' + ' div-field-form'}>
              <label for={field.name}>{field.name}:</label>
              <input name={field.name} id={field.name} />
            </div>)}
            <Button text = "log in" type = "authorization" />
        </form>
    )
  }
}