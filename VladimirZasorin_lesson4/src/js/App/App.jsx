import React, { Component } from 'react';
import List from './List';
import Login from './Login';
import Nav from './Nav';

import {articles} from './data/articles.js';
import {users} from './data/users.js';
import {comments} from './data/comments.js';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.articles = articles;
        this.users = users;
        this.comments = comments;
    }
    render() {

        return (
            <div className="container">
                <Nav/>
                <div className="jumbotron">
                    <h2 className="display-3">App name</h2>
                </div>
                {/* Здесь несколько типов страниц */}
                {/* <List type = {'article'}>{ this.articles }</List> */}
                {/* <Login /> */}
                {/* <List type = {'user'}>{ this.users }</List> */}
                <List type = {'comment'}>{ this.comments }</List>
            </div>
        )
    }
}