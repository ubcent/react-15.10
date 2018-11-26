import './Menu.css';

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';

@withRouter
export default class Menu extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        href: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
      })
    )
  }

  static defaultProps = {
    items: [],
  }

  render() {
    const { items } = this.props;
    return (
      <Fragment>
        <ul className="menu">
          {items.map((item, idx) =>
            <li key={idx}>
              <Link className={location.pathname === item.href ? 'active' : ''} to={item.href}>{item.title}</Link>
            </li>
          )}
        </ul>
      </Fragment>
    )
  }
}