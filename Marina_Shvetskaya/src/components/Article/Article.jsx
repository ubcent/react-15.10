import React, { Component } from 'react';

export default class Article extends Component {

  render() {
    const {article} = this.props;

    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{article.title}</h5>
          <p className="card-text">{article.text}</p>
        </div>
      </div>
    )
  }
}