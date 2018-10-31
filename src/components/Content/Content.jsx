import './Content.css';

import React, { Component } from 'react';

export default class Content extends Component {
  render() {
	const {title} = this.props;
    return (
      <div><b>{title}</b>
      <div className="content">

      </div></div>
    )
  }
}