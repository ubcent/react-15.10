import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';

import ArticlesList from 'components/ArticlesList';
import {load} from 'actions/articles';

class ArticlesContainer extends Component {

  // handleScroll = () => {
  //   if (document.documentElement.clientHeight - window.scrollY - window.innerHeight === 0) {
  //     if (!this.state.loading) {
  //       this.loadArticles();
  //     }
  //   }
  // };

  componentDidMount() {
 const { loadArticles } = this.props;
 loadArticles();
    // window.addEventListener('scroll', this.handleScroll);
  }

  render () {
    const { loading, articles } = this.props;

    return (
      <Fragment>
        <ArticlesList articles = { articles }/>
        {loading ? 'Loading' : ''}
      </Fragment>
    )
  }
}
function mapStateToProps(state, props) {
  return{
    ...props,
    articles: state.articles.entities,
    loading: state.articles.loading,
  }
}

function mapDispatchToProps(dispatch, props) {
  return{
    ...props,
    loadArticles: () => load(dispatch),
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(ArticlesContainer);