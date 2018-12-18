import React, {Component} from 'react';
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
    };


    render() {
        const {items} = this.props;
        return (
            <nav>
                <ul className='menu'>
                    {items.map((item, idx) => <li key={idx}><a href={item.href}>{item.title}</a></li>)}
                </ul>
            </nav>
        )
    }
}