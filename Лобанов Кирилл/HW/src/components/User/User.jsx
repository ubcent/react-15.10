import './User.css';

import React from 'react';
export default function(props) {
  const { name, username, email, phone, website } = props;
  return (
    <div className="User">
      <h2>{username}</h2>
      <h3>{name}</h3>
      <p>{phone}</p>
      <a href="#">{email}</a> <br/>
      <a href="#">{website}</a>
    </div>
  )
}