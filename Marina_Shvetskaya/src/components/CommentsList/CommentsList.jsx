import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

export default class CommentsList extends Component {

  // Компонент комментариев
  render() {
    const { comments } = this.props;

    return (
      <Fragment>
        <ul>
          <li><h4>Комментарии</h4></li>
          {comments.map(({postId, id, name, body}, idx) =>
            <li key={idx}>
              <Link to={`/comments/${id}`}>
                <h5>Comment #{id} on post #{postId}: {name}</h5>
              </Link>
              <p>{body}</p>
            </li>)}
        </ul>
      </Fragment>
    )
  }
}