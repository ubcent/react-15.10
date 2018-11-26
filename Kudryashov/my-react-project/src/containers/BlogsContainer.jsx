import React, { Component, Fragment } from 'react';
import ContentBlogs from 'components/ContentBlogs/ContentBlogs';

export default class BlogsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      blogs: [],
      page: 1,
    }
  }

  loadBlogs = () => {
    const { page } = this.state;
    this.setState({ loading: true });
    fetch(`https://jsonplaceholder.typicode.com/posts?_limit=5&_page=${page}`)
      .then((response) => response.json())
      .then((blogs) => {
        this.setState({
          loading: false,
          blogs: this.state.blogs.concat(blogs),
          page: page + 1,
        })
      })
      .catch(() => { this.setState({ loading: false }); });
  }

  handleClick = () => {
    if (!this.state.loading) {
      this.loadBlogs();
    }
  }

  componentDidMount() {
    this.loadBlogs();

    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    removeEventListener('scroll', this.handleScroll);
  }

  render() {
    const { loading, blogs } = this.state;
    return (
      <Fragment>
        <ContentBlogs blogs={blogs} onClick={this.handleClick} />
        {loading ? 'Loading' : ''}
      </Fragment>
    )
  }
}