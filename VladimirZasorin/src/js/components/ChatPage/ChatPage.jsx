import React, { Component } from 'react';
import UsersOnlineColomn from './UsersOnlineColomn';
import ChatColomn from './ChatColomn';
import VideoChatColomn from './VideoChatColomn';
import './ChatPage.css';

export default class ChatPage extends Component {
    render() {
        return (
            <div className="chatroom">
                <UsersOnlineColomn />
                <ChatColomn />
                <VideoChatColomn />
            </div>
        )
    }
}