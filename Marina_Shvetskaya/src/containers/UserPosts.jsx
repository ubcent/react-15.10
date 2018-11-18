import React, { Component, Fragment } from 'react';
import { Card, CardHeader, CardText, CardBody, CardTitle, CardLink } from 'reactstrap';
import PropTypes from 'prop-types';

export default class UserPosts extends Component {
  constructor(props) {
    super(props);

    this.user = this.props.user;

    this.state = {
      loading: true,
      userPosts: [],
    }
  }

  loadPosts = () => {
    const userId = this.user.id;
    this.setState({
      loading: true,
    });
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    .then((response) => response.json())
    .then((userPosts) => {
      this.setState({
        loading: false,
        userPosts: this.state.userPosts.concat(userPosts),
      })
    })
    .catch(() => {this.setState({loading: false}); });
  }

  componentDidMount() {
    this.loadPosts();
  }

  render() {
    const { loading, userPosts} = this.state;

    return (
      <ul>
        {userPosts.map((post) => <li key={post.id}>
          <CardBody>
          #{post.id}
          <strong>{post.title}</strong><br />
          {post.body}
          </CardBody>
        </li>)}
        {loading ? 'loading' : ''}
      </ul>
    )
  }
}