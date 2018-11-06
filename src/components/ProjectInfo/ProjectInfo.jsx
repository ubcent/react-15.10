import './ProjectInfo.css';

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

export default class ProjectInfo extends Component {

  static defaultProps = {
    items: [],
  }

  render() {
    const {title, items} = this.props;
    return (
    <div>
      <b>{title}</b>
      <ul className='ProjectInfo'>
      {items.map((item) => <li>{item.family} {item.name} {item.secondfamily}</li>)}
     </ul>
    </div>
    )
  }
}
