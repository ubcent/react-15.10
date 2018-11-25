import React, { Component } from 'react';
import { Link } from 'react-router';

export default class MenuItem extends Component {
    isCurrent( href ) {
        return href === window.location.pathname;
    }

    render() {
        return (
            <li className={ this.isCurrent( this.props.href ) ? 'current' : '' }>
                <Link to={ this.props.href }>{ this.props.children }</Link>
            </li>
        );
    }
}