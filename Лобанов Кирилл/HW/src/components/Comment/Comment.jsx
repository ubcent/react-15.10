import './Comment.css';

import React from 'react';

export default function (props) {
  const {name, body} = props;
  return (
    <div className="Comment">
      <h2>{name}</h2>
      <p> {body} </p>
    </div>
  )
}