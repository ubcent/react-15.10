import React, { Component } from 'react';

export default class BlogItem extends Component {
    render() {
        return (
            <ul className="pager nomargin">
                <li className="previous"><a href="#">&larr; Older</a></li>
                <li className="next"><a href="#">Newer &rarr;</a></li>
            </ul>
        );
    }
}