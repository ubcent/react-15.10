import './ContentNews.css';

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

export default class ContentNews extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { news } = this.props;
    return(
      <Fragment>
      <ul className="ContentNews">
      {news.map(({name, body}, idx) => <li key={idx}><h3>{name}</h3><p>{body}</p></li>)}
      <button className="more-news" onClick={this.props.onClick}>More news...</button>
      </ul>
      </Fragment>
    )
  }
}