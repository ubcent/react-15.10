import React, { Component } from 'react';

export default class Menu extends Component {
    render() {
        return (
            <div>
                <div id="primary-menu-trigger"><i className="icon-reorder"/></div>
                <nav id="primary-menu">
                    <ul>
                        { this.props.children }
                    </ul>
                </nav>
            </div>
        );
    }
}