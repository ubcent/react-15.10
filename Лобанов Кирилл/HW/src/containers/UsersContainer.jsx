import React, {Component, Fragment} from 'react';

import UsersList from 'components/UsersList';

export default class CommentsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      users: [],
      page: 1,
    }
  }

  loadUsers = () => {
    const {page} = this.state;
    this.setState({loading: true});
    fetch(`http://jsonplaceholder.typicode.com/users?_limit=10&_page=${page}`)
      .then((response) => response.json())
      .then((users) => {
        this.setState({
          page: this.state.page++,
          loading: false,
          users: this.state.users.concat(users),
        })
      })
      .catch(() => {
        this.setState({loading: false});
      });
  };


  handleScroll = () => {
    if (document.documentElement.clientHeight - window.scrollY - window.innerHeight === 0) {
      if (!this.state.loading) {
        this.loadUsers();
      }
    }
  };

  componentDidMount() {
    this.loadUsers();
    window.addEventListener('scroll', this.handleScroll);
  }

  render () {
    const { loading, users } = this.state;

    return (
      <Fragment>
        <UsersList users={ users } />
        {loading ? 'Loading' : ''}
      </Fragment>
    )
  }
}