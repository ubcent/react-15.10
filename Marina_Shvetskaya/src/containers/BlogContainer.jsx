import React, { Component, Fragment } from 'react';

import BlogList from 'components/BlogList';
import PropTypes from 'prop-types';

// Контейнер с логикой рендеринга страницы "Блог"
export default class BlogContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      posts: [],
      page: 1,
    }
  }

  /**
   * Загружает блоги из хранилища
   */
  loadPosts = () => {
    const { page } = this.state;
    this.setState({
      loading: true,
    });
    fetch(`https://jsonplaceholder.typicode.com/posts?_limit=5&_page=${page}`)
    .then((response) => response.json())
    .then((posts) => {
      this.setState({
        loading: false,
        page: page + 1,
        posts: this.state.posts.concat(posts),
      })
    })
    .catch(() => {this.setState({loading: false}); });
  };

  /**
   * Обрабатывает клик по кнопке "More", вызывает загрузчик следующей страницы блогов
   */
  handleClick = () => {
    if(!this.state.loading) {
      this.loadPosts();
    }
  };

  componentDidMount() {
    this.loadPosts();
  }

  render() {
    const { loading, posts } = this.state;

    return (
      <Fragment>
        <BlogList posts={posts} />
        {loading ? 'loading' : ''}
        <button className="btn btn-secondary float-right" onClick={this.handleClick}>
          More
        </button>
      </Fragment>
    )
  }
}