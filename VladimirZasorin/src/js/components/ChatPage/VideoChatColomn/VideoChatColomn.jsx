import React, { Component } from 'react';
import ColomnHeader from '../ColomnHeader';
import './VideoChatColomn.css';

export default class VideoChatColomn extends Component {
    render() {
        return (
            <div className="colomn-videochat">
                <ColomnHeader>Video conference</ColomnHeader>
                <hr />
                <div className="video-develop">
                    <p className="dev-alert">In developing</p>
                </div>
            </div>
        )
    }
}