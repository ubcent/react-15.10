import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import List from 'components/List';
import { load } from 'actions/articles';
import ErrorBoundary from 'components/ErrorBoundary';

class ArticlesContainer extends Component {
    handleScroll = () => {
        const { loadPosts } = this.props;
        if(document.documentElement.offsetHeight - (document.documentElement.scrollTop + window.innerHeight) <= 50) {
            if(!this.props.loading) {
                loadPosts();
            }
        }
    }
  
    componentDidMount() {
        const { loadPosts } = this.props;
    
        loadPosts();
    
        window.addEventListener('scroll', this.handleScroll);
    }
  
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    render() {
        const { loading, posts } = this.props;
        return (
            <Fragment>
                <ErrorBoundary>
                    <List elements={ posts } type="posts" />
                    {loading ? 'Loading' : ''}
                </ErrorBoundary>
            </Fragment>
        )
    }
}

function mapStateToProps(state, props) {
    return {
        ...props,
        posts: state.posts.entities,
        loading: state.posts.loading,
    }
}

function mapDisatchToProps(dispatch, props) {
    return {
        ...props,
        loadPosts: () => dispatch(load()),
    }
}

export default connect(mapStateToProps, mapDisatchToProps)(ArticlesContainer)