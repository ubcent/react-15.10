import React, { Component } from 'react';

import {articles} from '../data/articles.js';

export default class Article extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { match } = this.props;
        const article = articles[match.params.id];        
        return (
            <div className="card mx-auto article">
                <div className="card-header">
                    <h2>Article ID: { article.id }</h2>
                </div>
                <div className="card-body">
                    <h6 className="card-subtitle text-muted">
                        Creation date: {(new Date().toDateString())}
                    </h6>
                    <section className="card-text">
                        {article.text}
                    </section>
                </div>
            </div>
        )
    }
}