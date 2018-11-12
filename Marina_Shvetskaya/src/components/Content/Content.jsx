import './Content.scss';

import React from 'react';
import Article from '../Article';


export default function Content({articles}) {
  const elem = articles.map((article =>
    <li key = {article.id}>
      <Article article = {article} defaultOpen = {article.id === 1}/>
    </li>));
  return (
    <ul className="col-8">
      {elem}
    </ul>
  )
}