import './Content.scss';

import React, { Component } from 'react';
import Article from '.././Article';
import articles from '../../source/article.jsx';


export default class Content extends Component {
  render() {
    const elem = articles.map((article) => <li key = {article.id}><Article article = {article}/></li>)
    return (
      <ul className="col-md-10">
        {elem}
      </ul>
    )
  }
}