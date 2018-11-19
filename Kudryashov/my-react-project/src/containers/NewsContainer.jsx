import React, { Component, Fragment } from 'react';
import ContentNews from 'components/ContentNews/ContentNews';

export default class NewsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      news: [],
      page: 1,
    }
  }

  loadNews = () => {
    const { page } = this.state;
    this.setState({ loading: true });
    fetch(`https://jsonplaceholder.typicode.com/comments?_limit=10&_page=${page}`)
      .then((response) => response.json())
      .then((news) => {
        this.setState({
          loading: false,
          news: this.state.news.concat(news),
        })
      })
      .catch(() => { this.setState({ loading: false }); });
  }

  handleClick = () => {
    if (!this.state.loading) {
      this.loadNews();
    }
  }

  componentDidMount() {
    this.loadNews();

    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    removeEventListener('scroll', this.handleScroll);
  }

  render() {
    const { loading, news } = this.state;
    return (
      <Fragment>
        <ContentNews news={news} onClick={this.handleClick} />
        {loading ? 'Loading' : ''}
      </Fragment>
    )
  }
}