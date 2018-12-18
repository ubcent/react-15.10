import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import List from 'components/List';
import { load } from 'actions/comments';
import ErrorBoundary from 'components/ErrorBoundary';

class CommentsContainer extends Component {
    handleScroll = () => {
        const { loadComments } = this.props;
        if(document.documentElement.offsetHeight - (document.documentElement.scrollTop + window.innerHeight) <= 50) {
            if(!this.props.loading) {
                loadComments();
            }
        }
    }
  
    componentDidMount() {
        const { loadComments } = this.props;
    
        loadComments();
    
        window.addEventListener('scroll', this.handleScroll);
    }
  
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
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
        loadComments: () => dispatch(load()),
    }
}

export default connect(mapStateToProps, mapDisatchToProps)(CommentsContainer)