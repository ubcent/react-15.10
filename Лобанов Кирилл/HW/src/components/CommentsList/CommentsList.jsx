import './CommentsList.css';

import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class CommentsList extends Component {
  render() {
    const {comments} = this.props;

    return (
      <div>
        {comments.map(({name, body, id}, idx) => {
          return <div key={idx}>
            <Link to={`/comments/${id}`}><h3>{name}</h3></Link>
            <p> {body} </p>
          </div>
        })}
      </div>
    )
  }
}