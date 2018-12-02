import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import List from 'components/List';
import { load } from 'actions/comments';
import ErrorBoundary from 'components/ErrorBoundary';

class CommentsContainer extends Component {
    componentDidMount() {
        this.props.loadComments();
    }

    render() {
        const { loading, comments } = this.props;
        return (
            <Fragment>
                <ErrorBoundary>
                    <List elements={ comments } type="comments" />
                    {loading ? 'Loading' : ''}
                </ErrorBoundary>
            </Fragment>
        )
    }
}

function mapStateToProps(state, props) {
    return {
        ...props,
        comments: state.comments.entities,
        loading: state.comments.loading,
    }
}

function mapDisatchToProps(dispatch, props) {
    return {
        ...props,
        loadComments: () => load(dispatch),
    }
}

export default connect(mapStateToProps, mapDisatchToProps)(CommentsContainer)