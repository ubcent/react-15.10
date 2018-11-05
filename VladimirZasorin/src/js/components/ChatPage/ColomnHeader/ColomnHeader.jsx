import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ColomnHeader.css';

export default class ColomnHeader extends Component {
    static propTypes = {
        children: PropTypes.string
    }
    render() {
        const {children} = this.props;
        return (
            <h4>{children}</h4>
        )
    }
}