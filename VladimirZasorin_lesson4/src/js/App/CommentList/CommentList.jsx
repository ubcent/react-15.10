import React from 'react';
import {Link} from 'react-router-dom';

import {comments} from '../data/comments.js';

export default function CommentList() {
    let elements = comments.map((element, idx) =>
        <li key={ idx } className="article-list__li">
            <div className="media">
                <div className="media-body">
                    <Link to={ `articles/${element.articleId}` }>Article ID: { element.articleId }</Link>
                    <h5 className="mt-0">{ element.username }, age: { element.age }</h5>
                    <p>{ element.content }</p>
                </div>
            </div>
        </li>
    );
    return <ul>{ elements }</ul>;   
}