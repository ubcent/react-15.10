import React, {Component, Fragment} from 'react';

import Comment from 'components/Comment';
import PropTypes from 'prop-types';

export default class CommentContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      comment: {},
    }
  }

  /**
   * Загружает комментарий по его id
   */
  componentDidMount() {
    const {match} = this.props;

    this.setState({
      loading: true,
    });
    fetch(`https://jsonplaceholder.typicode.com/comments/${match.params.id}`)
      .then((response) => response.json())
      .then((comment) => {
        this.setState({
          loading: false,
          comment,
        })
      })
      .catch(() => {
        this.setState({loading: false});
      });
  }

  render() {
    const {loading, comment} = this.state;

    return (
      <Fragment>
        <Comment comment={comment} />
        {loading ? 'loading' : ''}
      </Fragment>
    )
  }
}
