import React, {Component, Fragment} from 'react';

import User from 'components/User';

export default class UserWatch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      user: {},
    }
  }

  componentDidMount() {
    const { match } = this.props;
    this.setState({loading: true});
    fetch(`http://jsonplaceholder.typicode.com/users/${match.params.id}`)
      .then((response) => response.json())
      .then((user) => {
        this.setState({
          loading: false,
          user
        })
      })
      .catch(() => {
        this.setState({loading: false});
      });
  }

  render () {
    const { loading, user } = this.state;

    return (
      <Fragment>
        <User name={user.name} username={user.username} email={user.email} phone={user.phone} website={user.website}/>
        {loading ? 'Loading' : ''}
      </Fragment>
    )
  }
}