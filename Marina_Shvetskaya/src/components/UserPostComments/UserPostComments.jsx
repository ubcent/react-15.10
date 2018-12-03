import './UserPostComments.css';

import React from 'react';
import {CardBody, CardTitle} from 'reactstrap';

// Компонент списка комментариев к посту отдельного пользователя
export default function (props) {
  const {postComments} = props;

  return (
    <ul>
      {postComments.map(({id, email, name, body}, idx) =>
        <li key={idx}>
          <CardBody>
            Comment #{id}: {email}<br/>
            <CardTitle>{name}</CardTitle>
            {body}
          </CardBody>
        </li>
      )}
    </ul>
  )
}