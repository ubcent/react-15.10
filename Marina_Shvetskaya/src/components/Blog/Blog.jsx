import React, { Component, Fragment } from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import { Card, CardHeader, CardText, CardBody, CardTitle } from 'reactstrap';

// Компонент карточки отдельного блога
export default class Blog extends Component {

   render() {
    const { post, isOpen, onButtonClick } = this.props;
     const cardBody = isOpen && (
    <CardBody>
      <CardTitle><Link to={`/users/${post.id}/${post.userId}`}>{post.title}</Link></CardTitle>
      <CardText>{post.body}</CardText>
    </CardBody>
    );

     return (
      <Fragment>
        <Card className="mb-4 pb-4">
          <CardHeader>
            <Link to={`/users/${post.id}/${post.userId}`} className="mb-2 text-primary">Post #{post.id} {post.title}</Link>
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