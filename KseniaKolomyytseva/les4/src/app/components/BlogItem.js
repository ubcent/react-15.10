import React, { Component } from 'react';

export default class BlogItem extends Component {
    render() {
        const items = this.props.items.map( ( item ) => {
            const textReadMore = 'Read More';

            return (
                <div className="entry clearfix" key={ item.id }>
                    <div className="entry-image">
                        <img className="image_fade" src="/images/17.jpg" alt="Standard Post with Image"/>
                    </div>
                    <div className="entry-c">
                        <div className="entry-title">
                            <h2><a href="#">{ item.title }</a></h2>
                        </div>
                        <ul className="entry-meta clearfix">
                            <li><i className="icon-calendar3"/> 10th Feb 2017</li>
                            <li><a href="#"><i className="icon-user"/> admin</a></li>
                            <li><i className="icon-folder-open"/>
                                <a className="tags" href="#">general</a>
                                <a className="tags" href="#">videos</a>
                            </li>
                            <li><a href="#"><i className="icon-comments"/> 13</a></li>
                            <li><a href="#"><i className="icon-camera-retro"/></a></li>
                        </ul>
                        <div className="entry-content">
                            <p>{ item.body }</p>
                            <a href="#" className="more-link">{ textReadMore }</a>
                        </div>
                    </div>
                </div>
            );
        } );

        return (
            <div id="posts" className="small-thumbs">
                { items }
            </div>
        );
    }
} 