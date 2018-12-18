import './BlogList.scss';

import React, { Component } from 'react';
import Blog from 'components/Blog';

// Компонент, содержащий компоненты отдельных блогов
export default class BlogList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      openBlogId: 1,
    }
  }

  /**
   * Обрабатывает клик по кнопке "Open"/"Close", передает нужное состояние компоненту отдельного блога
   * @param {int} openBlogId - id открытой карточки блога (при инициализации = 1)
   */
  handleClick = openBlogId =>() => {
    this.setState({
      openBlogId: this.state.openBlogId === openBlogId ? null : openBlogId,
    })
  };

  render() {
    const { posts } = this.props;

    return (
      <ul>
        <li><h4>Блог</h4></li>
        {posts.map((post) =>
          <Blog key={post.id} post={post}
            isOpen = {this.state.openBlogId === post.id}
            data-id ={post.id}
            onButtonClick = {this.handleClick(post.id)}
          />)}
      </ul>
    )
  }
}

