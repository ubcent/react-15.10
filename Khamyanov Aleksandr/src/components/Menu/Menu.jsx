import './Menu.scss';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Menu extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        href: PropTypes.string.isRequired
      })
    ),

    type: PropTypes.string
  };

  static defaultProps = {
    items: [],
    type: 'horizontal'
  };

  render() {
    let {items, type} = this.props;

    type = "menu-" + type;

    return (
        <ul className={type}>
          {items.map((item) => <li><a href={item.href}>{item.title}</a></li>)}
        </ul>
    )
  }
}