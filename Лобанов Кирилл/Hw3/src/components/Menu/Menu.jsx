import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Menu.css'



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
        const {items} = this.props;
        return (
            <ul className="menu">
                {items.map((item) => <li><a href={item.href}>{item.title}</a></li>)}
            </ul>
        )
    }
}