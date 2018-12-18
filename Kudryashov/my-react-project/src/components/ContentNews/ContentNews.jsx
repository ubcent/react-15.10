import './ContentNews.css';

import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

export default class ContentNews extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { news } = this.props;
    return (
      <Fragment>
        <ul className="ContentNews">
          {news.map(({ name, body, id }, idx) =>
            <li key={idx}><Link to={`/news/${id}`}><h3>{name}</h3></Link><p>{body}</p></li>)}
          <button className="more-news" onClick={this.props.onClick}>More news...</button>
        </ul>
      </Fragment>
    )
  }
}