import './ContentBlogs.css';

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

export default class ContentBlogs extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { blogs } = this.props;
    return(
      <Fragment>
      <ul className="ContentBlogs">
      {blogs.map(({title, body}, idx) => <li key={idx}><h3>{title}</h3><p>{body}</p></li>)}
      <button className="more-blogs" onClick={this.props.onClick}>More blogs...</button>
      </ul>
      </Fragment>
    )
  }
}