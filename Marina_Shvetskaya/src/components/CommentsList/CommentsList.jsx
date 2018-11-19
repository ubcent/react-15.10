// import './CommentsList.css';

import React, { Component, Fragment } from 'react';
import Comment from 'components/Comment';
import PropTypes from 'prop-types';

export default class CommentsList extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { comments } = this.props;

    return (
      <Fragment>
        <ul>
          <li><h4>Комментарии</h4></li>
          {comments.map((comment, idx) => <Comment key={idx} comment={comment}/>)}
        </ul>
      </Fragment>
    )
  }
}