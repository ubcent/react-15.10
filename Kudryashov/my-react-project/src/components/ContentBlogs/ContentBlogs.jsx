import './ContentBlogs.css';

import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

export default class ContentBlogs extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { blogs } = this.props;
    return (
      <Fragment>
        <ul className="ContentBlogs">
          {blogs.map(({ title, body, id }, idx) =>
            <li key={idx}><Link to={`/blogs/${id}`}><h3>{title}</h3></Link><p>{body}</p></li>)}
          <button className="more-blogs" onClick={this.props.onClick}>More blogs...</button>
        </ul>
      </Fragment>
    )
  }
}