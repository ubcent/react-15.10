import './SideMenu.css';

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

export default class SideMenu extends Component {
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
    items: [],
  }

  render() {
    const {title, items} = this.props;
    return (
      <div>
        <b>{title}</b>
        <ul className="sidemenu">
          {items.map((item) => <li className='spunkt'><a href={item.href}>{item.title}</a></li>)}
        </ul>
      </div>
    )
  }
}