import React, { Component } from 'react';
import axios from 'axios';

import PageTitle from '../components/PageTitle';
import BlogContent from '../components/BlogContent';
import Sidebar from '../components/Sidebar';
import BlogItem from '../components/BlogItem';
import Pagination from '../components/Pagination';
import Preloader from '../components/Preloader';

export default class BlogDetail extends Component {
    constructor() {
        super( ...arguments );

        this.state = {
            data: {}
        };

        axios.get( `https://jsonplaceholder.typicode.com/posts/${ this.props.params.blogId }` )
            .then( ( response ) => {
                const { data } = response;
                this.setState( {
                    data: data
                } );
            } );
    }

    render() {
        return (
            <div>
                <PageTitle title={ this.state.data.title } description={ `Пост №${ this.state.data.id }` }/>
                <section id="content">
                    <div className="content-wrap">
                        <div className="container clearfix">
                            <BlogContent>
                                <Preloader show={ this.state.data.id === undefined }/>
                                { this.state.data.body }/>
                            </BlogContent>
                            <Sidebar title={'Tag cloud'}/>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}