import React, { Component } from 'react';

export default class TagsItem extends Component {
    render() {
        return (
            <a className="tags" href={this.props.href}>{this.props.name}</a>
        );
    }
}