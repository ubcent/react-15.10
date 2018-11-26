import React, { Component } from 'react';

import {users} from '../data/users.js';

export default class UserPage extends Component {
    constructor(props) {
        super(props);
    }
    render() {    
        const { match } = this.props;
        let user = users[match.params.id];
        return (
            <div className="media">
                <img className="mr-3" src={ user.smImg } alt="image" />
                <div className="media-body">
                    <h5 className="mt-0">{ user.name }</h5>
                    <p>Age: { user.age }</p>
                </div>
            </div>
        )
    }
}