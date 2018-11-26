import './BlogList.scss';

import React, { Component } from 'react';
import Blog from 'components/Blog';

export default class BlogList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      openBlogId: null,
    }
  }
  
  handleClick = openBlogId => {
    this.setState({
      openBlogId: this.state.openBlogId === openBlogId ? null : openBlogId
    })
  };

  render() {
    const { posts } = this.props;

    return (
      <ul>
        <li><h4>Блог</h4></li>
        {posts.map((post) => <Blog key={post.id} post={post} 
        isOpen ={this.state.openBlogId === post.id}
        onButtonClick = {this.handleClick.bind(null, post.id)} />)}
      </ul>
    )
  }
}

