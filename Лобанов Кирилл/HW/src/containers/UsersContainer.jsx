import React, {Component, Fragment} from 'react';

import { connect } from 'react-redux';

import UsersList from 'components/UsersList';
import {load} from 'actions/users';

class CommentsContainer extends Component {
  // handleScroll = () => {
  //   if (document.documentElement.clientHeight - window.scrollY - window.innerHeight === 0) {
  //     if (!this.state.loading) {
  //       this.loadUsers();
  //     }
  //   }
  // };

  componentDidMount() {
    const {loadUsers} = this.props;
    loadUsers();
    // window.addEventListener('scroll', this.handleScroll);
  }

  render () {
    const { loading, users } = this.props;

    return (
      <Fragment>
        <UsersList users={ users } />
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

function mapDispatchToProps(dispatch, props) {
  return{
    ...props,
    loadUsers: () => load(dispatch),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(CommentsContainer);
