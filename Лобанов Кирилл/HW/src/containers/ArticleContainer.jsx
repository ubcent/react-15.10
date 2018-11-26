import React, {Component, Fragment} from 'react';

import ArticleShow from 'components/ArticleShow';

export default class ArticleContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      article: {},
    }
  }

  componentDidMount() {
    const { match } = this.props;
    this.setState({loading: true});
    fetch(`http://jsonplaceholder.typicode.com/posts/${match.params.id}`)
      .then((response) => response.json())
      .then((article) => {
        this.setState({
          loading: false,
          article
        })
      })
      .catch(() => {
        this.setState({loading: false});
      });
  }

  render () {
    const { loading, article } = this.state;

    return (
      <Fragment>
        <ArticleShow title={article.title} body={article.body}/>
        {loading ? 'Loading' : ''}
      </Fragment>
    )
  }
}