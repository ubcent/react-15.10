import './Menu.css';

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

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
    items: []
  }

  render() {
    const {items} = this.props;
    return(
      <Fragment>
        <ul className="menu">
          {items.map((item, idx) => <li key={idx}><a href={item.href}>{item.title}</a></li>)}
        </ul>
      </Fragment>
    )
  }
}