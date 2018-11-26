import React, {Component, Fragment} from 'react';

import ArticlesList from 'components/ArticlesList';

export default class ArticlesContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      articles: [],
      page: 1,
    }
  }

  loadArticles = () => {
    const {page} = this.state;
    this.setState({loading: true});
    fetch(`http://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`)
      .then((response) => response.json())
      .then((articles) => {
        this.setState({
          page: this.state.page++,
          loading: false,
          articles: this.state.articles.concat(articles),
        })
      })
      .catch(() => {
        this.setState({loading: false});
      });
  };


  handleScroll = () => {
    if (document.documentElement.clientHeight - window.scrollY - window.innerHeight === 0) {
      if (!this.state.loading) {
        this.loadArticles();
      }
    }
  };

  componentDidMount() {
    this.loadArticles();
    window.addEventListener('scroll', this.handleScroll);
  }

  render () {
    const { loading, articles } = this.state;

    return (
      <Fragment>
        <ArticlesList articles = { articles }/>
        {loading ? 'Loading' : ''}
      </Fragment>
    )
  }
}