import './Menu.css'

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';

@withRouter
export default class Menu extends Component {
    static propTypes = {
      items: PropTypes.arrayOf(
          PropTypes.shape({
              title: PropTypes.string.isRequired,
              href: PropTypes.string.isRequired,
          })
      )
    };

    static defaultProps = {
      items: [],
    };

    render() {
        const {items, location} = this.props;
        return (
            <ul className="menu">
                {items.map((item, idx) => <li  key={idx}><Link to={item.href} className={location.pathname === item.href ? 'active' : '' }>{item.title}</Link></li>)}
            </ul>
        )
    }
}