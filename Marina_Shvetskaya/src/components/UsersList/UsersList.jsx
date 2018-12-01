import './Userslist.scss';

import React, { Component } from 'react';
import User from 'components/User';

export default class UsersList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      openUserId: 1,
    }
  }

  /**
   * Обрабатывает клик по кнопке "Open"/"Close", передает нужное состояние компоненту отдельного пользователя
   * @param {int} openUserId - id открытой карточки пользователя (при инициализации = 1)
   */
  handleClick = openUserId => {
    this.setState({
      openUserId: this.state.openUserId === openUserId ? null : openUserId,
    })
  };

  render() {
    const { users } = this.props;

    return (
      <ul>
        <li><h4>Пользователи</h4></li>
        {users.map((user) =>
          <User key={user.id} user={user}
            isOpen ={this.state.openUserId === user.id}
            onButtonPostsClick = {this.handleClick.bind(null, user.id)}
          />)}
      </ul>
    )
  }
}

