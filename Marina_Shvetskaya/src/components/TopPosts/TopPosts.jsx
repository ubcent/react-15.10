import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import { Card, CardHeader, CardTitle} from 'reactstrap';

export default class TopPosts extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        item: PropTypes.string.isRequired,
      })
    )
  };

  render() {
    const {posts} = this.props;
    return (
        <div>
          <Card className="pb-3 mb-3">
            <CardHeader>
              <CardTitle className="ml-3">Последние посты</CardTitle>
            </CardHeader>
            <ul>
              {posts.map((post =>
                <li key={post.id} className="mb-3"><Link to={`/users/${post.id}/${post.userId}`}>{post.title}</Link></li>))}
            </ul>
          </Card>
        </div>
    )
  }
}

