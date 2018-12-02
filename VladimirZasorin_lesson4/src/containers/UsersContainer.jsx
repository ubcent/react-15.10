import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import List from 'components/List';
import { load } from 'actions/users';

class UsersContainer extends Component {
    componentDidMount() {
        this.props.loadUsers();
    }

    render() {
        const { loading, users } = this.props;
        return (
            <Fragment>
                <List elements={ users } type="users" />
                {loading ? 'Loading' : ''}
            </Fragment>
        )
    }
}

function mapStateToProps(state, props) {
    return {
        ...props,
        users: state.users.entities,
        loading: state.users.loading,
    }
}

function mapDisatchToProps(dispatch, props) {
    return {
        ...props,
        loadUsers: () => load(dispatch),
    }
}

export default connect(mapStateToProps, mapDisatchToProps)(UsersContainer)