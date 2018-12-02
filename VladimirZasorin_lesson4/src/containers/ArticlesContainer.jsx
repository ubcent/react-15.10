import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import List from 'components/List';
import { load } from 'actions/articles';
import ErrorBoundary from 'components/ErrorBoundary';

class ArticlesContainer extends Component {
    componentDidMount() {
        this.props.loadPosts();
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
        loadPosts: () => load(dispatch),
    }
}

export default connect(mapStateToProps, mapDisatchToProps)(ArticlesContainer)