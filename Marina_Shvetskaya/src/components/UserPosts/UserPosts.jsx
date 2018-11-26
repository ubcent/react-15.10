import './UserPosts.css';

import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import { Card, CardHeader, CardText, CardBody, CardTitle, CardLink } from 'reactstrap';

// Компонент списка постов отдельного пользователя
export default function (props) {
  const {id, userId, title, body} = props.post;
  return (
    <Fragment>
      <li key={id}>
        <CardBody>
          Post #{id}:
          <Link to={`/users/${id}/${userId}`}>
            <CardTitle> {title}</CardTitle>
          </Link>
          {body}
        </CardBody>
      </li>
    </Fragment>
  )
}