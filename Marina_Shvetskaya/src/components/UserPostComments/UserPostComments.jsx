import './UserPostComments.css';

import React, {Fragment} from 'react';
import {CardBody, CardTitle} from 'reactstrap';

// Компонент списка комментариев к посту отдельного пользователя
export default function (props) {
  const {postComments} = props;
  console.log(postComments);
  return (
    <ul>
      {postComments.map(({email, name, body, id}, idx) =>
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