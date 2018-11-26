import React, {Component} from 'react';
import Article from '../Article';

import {articles} from '../data/articles.js';

export default class ArticleList extends Component {
    constructor(props) {
        super(props);

        this.i = 0;

        this.state = {
            articleList: []
        };
    }

    loadComments = () => {
        const arr = [];
        for (let j = 0; j < 5; j++) {
            if (articles.length > this.i) {
                arr.push(articles[this.i++]);
            }
        }
        this.setState({ articleList: this.state.articleList.concat(arr) })
    }

    handleScroll = () => {
        if(document.documentElement.offsetHeight - (document.documentElement.scrollTop + window.innerHeight) <= 50) {
            if(!this.state.loading) {
                this.loadComments();
            }
        }
    }

    componentDidMount() {
        if (articles.length > this.i) {
            this.loadComments();
            window.addEventListener('scroll', this.handleScroll);
        }
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    render() {
        const {articleList} = this.state;
        let elements = articleList.map((element, idx) =>
            <li key={ idx } className="article-list__li">
                <Article>{ element }</Article>
            </li>
        );
        return <ul>{ elements }</ul>;
    }
}