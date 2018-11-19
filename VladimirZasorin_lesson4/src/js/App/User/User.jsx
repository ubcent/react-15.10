import React, { Component } from 'react';

export default class User extends Component {
    constructor(props) {
        super(props);
    }

    render() {    
        let user = this.props.children;    
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