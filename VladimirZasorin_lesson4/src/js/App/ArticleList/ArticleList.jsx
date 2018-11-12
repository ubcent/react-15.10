import React, { Component } from 'react';
import Article from '../Article';
import './style.css';

export default class ArticleList extends Component {
    constructor(props) {
        super(props)
        this.articles = this.props.children;
    }

    render() {
        return (
            <ul>
                <li className="article-list__li">
                    <Article>{this.articles[0]}</Article>
                </li>
                <li className="article-list__li">
                    <Article>{this.articles[1]}</Article>
                </li>
                <li className="article-list__li">
                    <Article>{this.articles[2]}</Article>
                </li>
                <li className="article-list__li">
                    <Article>{this.articles[3]}</Article>
                </li>
            </ul>
        )
    }

    // map(x) {
    //     x.map((article) => {
    //         <li className="article-list__li"><Article>{article}</Article></li>
    //     });
    // }
}