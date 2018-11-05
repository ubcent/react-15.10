import React, { Component } from 'react';
import './Message.css';

export default class Message extends Component {
    static propTypes = {
        children: PropTypes.string,
        name: PropTypes.string,
        time: PropTypes.string,
        message: PropTypes.string
    };
    render() {
        return (
            <div className = { divname }>
                <h5 className = { 'name' }>{ name }</h5>
                <span className = { 'time' }>{ time }</span>
                <pre className = { 'text' }>{ message }</pre>
            </div>
        )
    }
}