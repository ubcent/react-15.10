import './UsersList.css';

import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class UsersList extends Component {
  render() {
    const { users } = this.props;
    return (
      <div className="UsersList">
          {users.map(({username, name, email, website, id}, idx) => {
            return <div className="users-margin-bottom" key={idx}>
              <Link to={`/users/${id}`}><h3>{username}</h3></Link>
              <p>{name}</p>
              <Link to={'#'}>{email}</Link>
              <div>
              <Link to={'#'}>{website}</Link>
              </div>
            </div>
          })}
      </div>
    )
  }
}