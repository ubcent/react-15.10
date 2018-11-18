import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Card, CardHeader, CardText, CardBody, CardTitle, CardLink } from 'reactstrap';

export default class Blog extends Component {

   render() {
    const { post, isOpen, onButtonClick } = this.props;
    const cardBody = isOpen && (
    <CardBody>
      <CardTitle>{post.title}</CardTitle>
      <CardText>{post.body}</CardText>
    </CardBody>
    );

     return (
      <Fragment>
        <Card className="mb-4 pb-4">
          <CardHeader>
            <CardLink href="#" className="mb-2 text-primary">#{post.id} {post.title}</CardLink>
            <button onClick={onButtonClick} className="btn btn-primary float-right">
              {isOpen ? 'Close' : 'Open'}
            </button>
          </CardHeader>
          <CardBody>
            {cardBody}
          </CardBody>
        </Card>
      </Fragment>
    )
  }
}