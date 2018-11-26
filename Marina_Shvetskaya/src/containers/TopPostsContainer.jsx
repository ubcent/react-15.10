import React, {Component, Fragment} from 'react';

import TopPosts from 'components/TopPosts';
import PropTypes from 'prop-types';

// Контейнер с логикой рендеринга блока с последними постами
export default class TopPostsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      posts: [],
      amount: 10,
    }
  }

  /**
   * Загружает комментарий по его id
   */
  componentDidMount() {
    const { amount } = this.state;
    this.setState({
      loading: true,
    });
    fetch(`https://jsonplaceholder.typicode.com/posts?_sort=id&_order=desc&_limit=${amount}`)
      .then((response) => response.json())
      .then((posts) => {
        this.setState({
          loading: false,
          posts: this.state.posts.concat(posts),
        })
      })
      .catch(() => {
        this.setState({loading: false});
      });
  }

  render() {
    const {loading, posts} = this.state;

    return (
      <Fragment>
        <TopPosts posts={posts} />
        {loading ? 'loading' : ''}
      </Fragment>
    )
  }
}
