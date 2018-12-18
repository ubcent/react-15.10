import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardText, CardBody, CardTitle, CardLink } from 'reactstrap';
import PropTypes from 'prop-types';

export default class Comment extends Component {

   render() {
    const { comment } = this.props;

     return (
      <Fragment>
        <Card className="mb-4 pb-4">
          <CardHeader>
            <CardTitle className="mb-2 text-primary">
              Comment id #{comment.id} on post #{comment.postId}
            </CardTitle>
          </CardHeader>
          <CardBody>
            <CardTitle>
              {comment.name}
            </CardTitle>
            {comment.body}
          </CardBody>
        </Card>
        <Link to={'/comments'} className="btn btn-primary">Назад</Link>
      </Fragment>
    )
  }
}