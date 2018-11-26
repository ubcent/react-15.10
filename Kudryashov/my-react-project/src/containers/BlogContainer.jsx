import React, { Component, Fragment } from 'react';
import ContentBlog from 'components/ContentBlog/ContentBlog';

export default class BlogContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      blog: {},
    }
  }

  componentDidMount() {
    const { match } = this.props;
    this.setState({ loading: true });
    fetch(`https://jsonplaceholder.typicode.com/posts/${match.params.id}`)
      .then((response) => response.json())
      .then((blog) => {
        this.setState({
          loading: false,
          blog,
        })
      })
      .catch(() => { this.setState({ loading: false }); });
  }

  render() {
    const { loading, blog } = this.state;
    return (
      <Fragment>
        <ContentBlog title={blog.title} body={blog.body} />
        {loading ? 'Loading' : ''}
      </Fragment>
    )
  }
}