import './ContentBlog.css';

import React from 'react';

export default function(props) {
  return(
    <div className="ContentBlog">
    <h2>{props.title}</h2>
    <p>{props.body}</p>
    </div>
  )
}