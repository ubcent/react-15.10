import React, { Component } from 'react';
import Article from '../Article';
import User from '../User';
import Comment from '../Comment';
import './style.css';

export default class List extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let arr = this.props.children;
        let elements = arr.map((element) =>
            <li className="article-list__li">{ this.elementType(element) }</li>
        );
        return (
            <ul>{ elements }</ul>
        )
    }

    elementType(el) {
        let type = this.props.type;

        return type === 'article' && <Article>{ el }</Article>
        || type === 'user' && <User>{ el }</User>
        || type === 'comment' && <Comment>{ el }</Comment>;
    }
}