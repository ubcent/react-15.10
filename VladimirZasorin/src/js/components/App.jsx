import React, { Component, Fragment } from 'react';
import LoginForm from './LoginForm';
import ChatPage from './ChatPage';

export default class App extends Component {
    render() {
        return (
            <Fragment>
                <LoginForm />
                <ChatPage />
            </Fragment>
        )
    }
}