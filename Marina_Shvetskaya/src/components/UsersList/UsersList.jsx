import './Userslist.scss';

import React, { Component } from 'react';
import User from 'components/User';

export default class UsersList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      openBlogId: null,
    }
  }
  
  handleClick = openBlogId => {
    this.setState({
      openBlogId: this.state.openBlogId === openBlogId ? null : openBlogId
    })
  };

  render() {
    const { users } = this.props;

    return (
      <ul>
        <li><h4>Пользователи</h4></li>
        {users.map((user) => <User key={user.id} user={user} 
        isOpen ={this.state.openBlogId === user.id}
        onButtonClick = {this.handleClick.bind(null, user.id)} />)}
      </ul>
    )
  }
}

