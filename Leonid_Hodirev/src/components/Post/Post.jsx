import './Post.css';

import React from 'react';

export default function (props) {
    return (
        <div className="Post">
            <h2>{props.title}</h2>
            <p>{props.body}</p>
        </div>
    )
}