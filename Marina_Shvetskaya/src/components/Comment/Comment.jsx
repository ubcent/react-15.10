import React, { Component, Fragment } from 'react';
import { Card, CardHeader, CardText, CardBody, CardTitle, CardLink } from 'reactstrap';
import PropTypes from 'prop-types';

export default class Comment extends Component {

   render() {
    const { comment } = this.props;

     return (
      <Fragment>
        <Card className="mb-4 pb-4">
          <CardHeader>
            <CardLink href="#" className="mb-2 text-primary">
              # Blog {comment.postId}: {comment.name}
            </CardLink>
            <CardLink href="#" className="mb-2 text-primary float-right">
              {comment.id} 
            </CardLink>
          </CardHeader>
          <CardBody>
            {comment.body}
          </CardBody>
        </Card>
      </Fragment>
    )
  }
}