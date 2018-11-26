import React, {Component} from 'react';
import './Sidebar.css'
import PropTypes from "prop-types";

export default class Sidebar extends Component {
    render() {
        const {children} = this.props;
        return (
            <div>
                {children}
            </div>
        )
    }
}