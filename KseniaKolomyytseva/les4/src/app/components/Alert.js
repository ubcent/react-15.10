import React, { Component } from 'react';

export default class Alert extends Component {
    render() {
        return (
            <div className="alert alert-success">
                <i className="icon-gift"/>{this.props.message}
            </div>
        );
    }
}