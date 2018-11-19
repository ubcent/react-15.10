import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Card, CardHeader, CardText, CardBody, CardTitle, CardLink } from 'reactstrap';
import UserPosts from 'containers/UserPosts';

export default class User extends Component {
    
   render() {
    const { user } = this.props;

     return (
      <Fragment>
        <Card className="mb-4 pb-4">
          <CardHeader>
            <CardLink href="#" className="mb-2 text-primary">
              # Blog {user.name}
            </CardLink>
            <CardLink href="#" className="mb-2 text-primary float-right">
              nickname: {user.username} 
            </CardLink>
          </CardHeader>
          <CardBody>
            <UserPosts user={user}/>
          </CardBody>
        </Card>
      </Fragment>
    )
  }
}