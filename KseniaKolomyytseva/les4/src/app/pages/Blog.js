import React, { Component } from 'react';
import axios from 'axios';

import PageTitle from '../components/PageTitle';
import BlogContent from '../components/BlogContent';
import Sidebar from '../components/Sidebar';
import BlogItem from '../components/BlogItem';
import Pagination from '../components/Pagination';
import Preloader from '../components/Preloader';

export default class Blog extends Component {
    constructor() {
        super();

        this.state = {
            posts: []
        };

        axios.get( 'https://jsonplaceholder.typicode.com/posts' )
            .then( ( response ) => {
                const { data } = response;
                this.setState( {
                    posts: data
                } );
            } );
    }

    render() {

        if ( !this.props.children ) {
            return (
                <div>
                    <PageTitle title={'Блог'} description={'Наши последние новости'}/>
                    <section id="content">
                        <div className="content-wrap">
                            <div className="container clearfix">
                                <BlogContent>
                                    <Preloader show={ !this.state.posts.length }/>
                                    <BlogItem items={ this.state.posts }/>
                                    <Pagination/>
                                </BlogContent>
                                <Sidebar title={'Tag cloud'}/>
                            </div>
                        </div>
                    </section>
                </div>
            );

        } else {
            return (
                this.props.children
            );
        }
    }
}