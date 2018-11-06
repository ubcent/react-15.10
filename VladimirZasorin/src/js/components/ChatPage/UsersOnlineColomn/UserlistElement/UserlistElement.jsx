import React, { Component } from 'react';
import './UserlistElement.css';

export default class UserlistElement extends Component {
    static propTypes = {
        children: PropTypes.string
    }
    render() {
        const {children} = this.props;
        return (
            <li className="list-element">
                <p className="name-elem">
                    { children }
                </p>
            </li>
        )
    }
}