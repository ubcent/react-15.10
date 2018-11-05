import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import './Menu.css';


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
    title: 'Menu',
  }

  render(){
    const {title, items} = this.props;
    return(
      <Fragment>
        <h2>{title}</h2>
        <ul className='menu'>
          {items.map((item) => <li><a href={item.href}>{item.title}</a></li>)}
        </ul>
      </Fragment>
    )
  }
}