import React, { Component } from 'react';
import ColomnHeader from '../ColomnHeader';
import './ChatColomn.css'

export default class ChatColomn extends Component {
    render() {
        return (
            <div className="colomn-chat">
                <ColomnHeader>Chat</ColomnHeader>
                <hr />
                <div id="status" className="chat-cont"></div>
                <form className="messform">
                    <textarea id="mes"></textarea>
                    <button className="sendMes" type="submit">Send</button>
                </form>
            </div>
        )
    }
}