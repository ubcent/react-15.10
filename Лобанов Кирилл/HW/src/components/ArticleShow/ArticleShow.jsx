import './ArticleShow.css';

import React from 'react';
export default function(props) {
  const { title, body } = props;
  return (
    <div className="ArticleShow">
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  )
}