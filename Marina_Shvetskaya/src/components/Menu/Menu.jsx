import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

export default class Menu extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        href: PropTypes.string.isRequired,
      })
    )
  }

  render() {
    const {title, items} = this.props;
    return (
      <Fragment>
         <ul className="nav nav-tabs mb-3">
          {items.map((item) => <li className="nav-item"><a className="nav-link" href={item.href}>{item.title}</a></li>)}
        </ul>
      </Fragment>
    )
  }
}

