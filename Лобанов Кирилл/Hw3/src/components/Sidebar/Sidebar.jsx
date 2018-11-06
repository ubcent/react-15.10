import React, {Component} from 'react';
import './Sidebar.css'
import PropTypes from "prop-types";

export default class Sidebar extends Component {
    static propTypes = {
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

            <details open>
                <summary className="position-summary-sidebar">
                    Sidebar
                </summary>
                <ul className="sidebar">
                    {items.map((item) => <li><a href={item.href}>{item.title}</a></li>)}
                </ul>
            </details>

        )
    }
}