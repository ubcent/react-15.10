import React, { Component } from 'react';
import ColomnHeader from '../ColomnHeader';
import './UsersOnlineColomn.css';

export default class UsersOnlineColomn extends Component {
    render() {
        return (
            <div className="colomn-users">
                <ColomnHeader>Users Online</ColomnHeader>
                <hr />
                <div className="users-cont">
                    <ul className="userlist">
                    </ul>
                </div>
            </div>
        )
    }
}

