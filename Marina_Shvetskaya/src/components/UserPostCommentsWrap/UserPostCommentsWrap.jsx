import './UserPostCommentsWrap.css';

import React, {Fragment} from 'react';
import { Card, CardHeader, CardText, CardTitle } from 'reactstrap';
import UserPostComments from 'components/UserPostComments';
import {Link} from 'react-router-dom';

// Компонент блока поста отдельного пользователя с комментариями
export default function(props) {
  const {name, username} = props.user;
  const {id, title, body} = props.userPost;

  return (
    <Fragment>
      <Card className="mb-4 pb-4">
        <CardHeader>
          <CardTitle className="text-primary float-left">
            Post #{id} of user {name} (nickname: {username})
          </CardTitle>
          <Link to="/users" className="btn btn-primary float-right">Назад</Link>
        </CardHeader>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          {body}
        </CardHeader>
      </Card>
    </Fragment>
  )
}