import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Card, CardHeader, CardText, CardBody, CardTitle, CardLink } from 'reactstrap';
import UserPostsContainer from 'containers/UserPostsContainer';

// Компонент карточки отдельного пользователя
export default class User extends Component {

   render() {
    const { user, isOpen, onButtonPostsClick } = this.props;
    const userPosts = isOpen && <UserPostsContainer user={user}/>;

     return (
      <Fragment>
        <Card className="mb-4 pb-4">
          <CardHeader>
            <CardTitle className="text-primary float-left">
              Blog #{user.id} of user {user.name} (nickname: {user.username})
            </CardTitle>
            <button onClick={onButtonPostsClick}  className="btn btn-primary float-right">
              {isOpen ? 'Close' : 'Open'}
            </button>
          </CardHeader>
          <CardBody>
            {userPosts}
          </CardBody>
        </Card>
      </Fragment>
    )
  }
}