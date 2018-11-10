import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import './Menu.css';

// statefull
export default class Menu extends Component {
  static propTypes = {
    title: PropTypes.string,
    items: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string.isRequeired,
          href: PropTypes.string.isRequeired,
        })
    )
  };

  static defaultProps = {
    title: 'Default menu title',
    items: [],
  };

  render() {
    const {title, items} = this.props;
    return (
        <Fragment>
          <h3>{title}</h3>
          <ul className="menu">
            {items.map((item, idx) => <li key={idx}><a href={item.href}>{item.title}</a></li>)}
          </ul>
        </Fragment>
    )
  }
}