import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

export default class Sidebar extends Component {
  static propTypes = {
    title: PropTypes.string,
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
         <ul className="nav flex-column">
          {items.map((item) => <li className="nav-item"><a className="nav-link" href={item.href}>{item.title}</a></li>)}
        </ul>
      </Fragment>
    )
  }
}