import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        return (
            <header id="header">
                <div id="header-wrap">
                    <div className="container clearfix">
                        { this.props.children }
                    </div>
                </div>
            </header>
        );
    }
}