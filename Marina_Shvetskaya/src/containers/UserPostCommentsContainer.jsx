import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import UserPostCommentsWrap from 'components/UserPostCommentsWrap';
import UserPostComments from 'components/UserPostComments';


// Контейнер с логикой рендеринга поста пользователя с комментариями
export default class UserPostCommentsContainer extends Component {
  constructor(props) {
    super(props);

    this.userId = this.props.match.params.userId;
    this.postId = this.props.match.params.postId;

    this.state = {
      loading: true,
      user: {},
      userPost: {},
      postComments: [],
    }
  }

  /**
   * Загружает информацию о пользователе по id пользователя
   */
  loadUser() {
    this.setState({
      loading: true,
    });
    fetch(`https://jsonplaceholder.typicode.com/users/${this.userId}`)
      .then((response) => response.json())
      .then((user) => {
        this.setState({
          loading: false,
          user,
        });
      })
      .catch(() => {
        this.setState({loading: false});
      });
  };

  /**
   * Загружает пост пользователя по id поста
   */
  loadUserPost() {
    this.setState({
      loading: true,
    });
    fetch(`https://jsonplaceholder.typicode.com/posts/${this.postId}`)
      .then((response) => response.json())
      .then((userPost) => {
        this.setState({
          loading: false,
          userPost,
        });
      })
      .catch(() => {
        this.setState({loading: false});
      });
  };

  /**
   * Загружает комментарии к посту пользователя
   */
  loadPostComments() {
    this.setState({
      loading: true,
    });
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${this.postId}`)
      .then((response) => response.json())
      .then((postComments) => {
        this.setState({
          loading: false,
          postComments: this.state.postComments.concat(postComments),
        })
      })
      .catch(() => {
        this.setState({loading: false});
      });
  };

  /**
   * Вызывает методы для получения из хранилища информации
   */
  componentDidMount() {
    this.loadUser();
    this.loadUserPost();
    this.loadPostComments();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props) {
      this.userId = nextProps.match.params.userId;
      this.postId = nextProps.match.params.postId;
      this.setState({
        postComments: []
      });
      this.loadUser();
      this.loadUserPost();
      this.loadPostComments();
    }
  }

  render() {
    const {loading, user, userPost, postComments} = this.state;

    return (
      <Fragment>
        <UserPostCommentsWrap user={user} userPost={userPost} />
        <UserPostComments postComments={postComments}/>
        {loading ? 'loading' : ''}
      </Fragment>
    )
  }
}