import React from 'react';
import {Link} from 'react-router-dom';

import {users} from '../data/users.js';

export default function UserList() {
    let elements = users.map((element, idx) =>
        <li key={ idx } className="article-list__li">
            <div className="media">
                <img className="mr-3" src={ element.smImg } alt="image" />
                <div className="media-body">
                    <h5 className="mt-0">
                        <Link to={ `users/${element.id}` }>
                            { element.name }
                        </Link>
                    </h5>
                    <p>Age: { element.age }</p>
                </div>
            </div>
        </li>
    );
    return <ul>{ elements }</ul>;
}