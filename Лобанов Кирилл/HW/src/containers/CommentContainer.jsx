import React, {Component, Fragment} from 'react';

import Comment from 'components/Comment';

export default class CommentContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      comment: {},
    }
  }

  componentDidMount() {
    const { match } = this.props;
    this.setState({loading: true});
    fetch(`http://jsonplaceholder.typicode.com/comments/${match.params.id}`)
      .then((response) => response.json())
      .then((comment) => {
        this.setState({
          loading: false,
          comment
        })
      })
      .catch(() => {
        this.setState({loading: false});
      });
  }

  render () {
    const { loading, comment } = this.state;

    return (
      <Fragment>
        <Comment name={ comment.name } body={ comment.body }/>
        {loading ? 'Loading' : ''}
      </Fragment>
    )
  }
}