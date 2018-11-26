import './ContentNew.css';

import React from 'react';

export default function(props) {
  return(
    <div className="ContentNew">
    <h2>{props.name}</h2>
    <p>{props.body}</p>
    </div>
  )
}