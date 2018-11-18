import React, { Component } from 'react';

import Blog from './BlogContent';
import Sidebar from './Sidebar';

export default class Content extends Component {
    render() {
        return (
            <section id="content">
                <div className="content-wrap">
                    <div className="container clearfix">
                        <Blog/>
                        <Sidebar title={'Tag cloud'}/>
                    </div>
                </div>
            </section>
        );
    }
}