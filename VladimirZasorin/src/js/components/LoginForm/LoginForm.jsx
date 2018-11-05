import React, { Component } from 'react';
import './LoginForm.css';

export default class LoginForm extends Component {
    render() {
        return (
            <form class="enter">
                <h3 className="enterMessage">Enter your name to enter the chat.</h3>
                <input id="name" className="nameInput" type="text" autocomplete="off" />
            </form>
        )
    }
}