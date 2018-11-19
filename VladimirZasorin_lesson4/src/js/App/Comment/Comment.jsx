import React, { Component } from 'react';

export default class Comment extends Component {
    constructor(props) {
        super(props);
    }

    render() { 
        let comment = this.props.children;
        return (
            <div className="media">
                <div className="media-body">
                    <a href="#">Article ID: { comment.articleId }</a>
                    <h5 className="mt-0">{ comment.username }, age: { comment.age }</h5>
                    <p>{ comment.content }</p>
                </div>
            </div>
        )
    }
}