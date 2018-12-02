import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import UserPosts from 'components/UserPosts';

// Контейнер с логикой рендеринга блока постов для каждого пользователя
export default class UserPostsContainer extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);

    this.user = this.props.user;
    this.userId = this.user.id;

    this.state = {
      loading: true,
      userPosts: [],
    };
    console.log(this.state);

  }

  /**
   * Загружает посты пользователя из хранилища
   */
  componentDidMount() {

    this.setState({
      loading: true,
    });
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${this.userId}`)
      .then((response) => response.json())
      .then((userPosts) => {
        this.setState({
          loading: false,
          userPosts: this.state.userPosts.concat(userPosts),
        })
      })
      .catch(() => {
        this.setState({loading: false});
      });
  };

    render() {
    const {loading, userPosts} = this.state;

    return (
      <ul>
        {userPosts.map((post) => <UserPosts key={post.id} post={post} userId={this.userId}/>)}
        {loading ? 'loading' : ''}
      </ul>
    )
  }
}