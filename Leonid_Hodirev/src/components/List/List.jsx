import React from 'react';

export default function (props) {
    const {items} = props;
    return (
        <ul>
            {items.map((item, idx) => <li key={idx}>{item}</li>)}
        </ul>
    )
}