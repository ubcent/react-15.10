import './ArticlesList.css';

import React, {Component} from 'react';
import {Link} from "react-router-dom";

export default class ArticlesList extends Component {
  render() {
    const { articles } = this.props;
    return (
      <div className="ArticlesList">
        {articles.map(({title, body, id}, idx) => {
          return <div className="article-border-bottom" key={idx}>
            <Link to={`/blog/${id}`}><h3>{title}</h3></Link>
            <p> {body} </p>
          </div>
        })}
      </div>
    )
  }
}