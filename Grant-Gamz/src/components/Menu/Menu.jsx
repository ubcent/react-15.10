import './Menu.css';

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

export default class Menu extends Component {
  static propTypes = {
    title: PropTypes.string,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        href: PropTypes.string.isRequired,
      })
    )
  }

  static defaultProps = {
    title: 'Default menu title',
    items: [],
  }

  render() {
    const {title, items} = this.props;
    return (
      <Fragment>
        <b>{title}</b>
        <ul className="menu">
          {items.map((item) => <li className='punkt'><a href={item.href}>{item.title}</a></li>)}
        </ul>
      </Fragment>
    )
  }
}
