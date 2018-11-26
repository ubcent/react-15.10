import React, { Component, Fragment } from 'react';
import ContentNew from 'components/ContentNew/ContentNew';

export default class NewContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      newsOne: {},
    }
  }

  componentDidMount() {
    const { match } = this.props;
    this.setState({ loading: true });
    fetch(`https://jsonplaceholder.typicode.com/comments/${match.params.id}`)
      .then((response) => response.json())
      .then((newsOne) => {
        this.setState({
          loading: false,
          newsOne,
        })
      })
      .catch(() => { this.setState({ loading: false }); });
  }

  render() {
    const { loading, newsOne } = this.state;
    return (
      <Fragment>
        <ContentNew name={newsOne.name} body={newsOne.body} />
        {loading ? 'Loading' : ''}
      </Fragment>
    )
  }
}