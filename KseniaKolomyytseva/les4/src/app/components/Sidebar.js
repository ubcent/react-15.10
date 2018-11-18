import React, { Component } from 'react';

import Tags from './Tags';
import Button from './Button';
import ModalWindow from './ModalWindow';

const tags = [
    {
        id: 1,
        name: 'general',
        href: '#'
    },
    {
        id: 2,
        name: 'videos',
        href: '#'
    },
    {
        id: 3,
        name: 'music',
        href: '#'
    },
    {
        id: 4,
        name: 'media',
        href: '#'
    },
    {
        id: 5,
        name: 'photography',
        href: '#'
    }, 
    {
        id: 6,
        name: 'parallax',
        href: '#'
    },
    {
        id: 7,
        name: 'ecommerce',
        href: '#'
    },
    {
        id: 8,
        name: 'terms',
        href: '#'
    },
    {
        id: 9,
        name: 'coupons',
        href: '#'
    },
    {
        id: 10,
        name: 'modern',
        href: '#'
    }
];

export default class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar nobottommargin col_last clearfix">
                <div className="sidebar-widgets-wrap">
                    <div className="widget clearfix">
                        <h4>{this.props.title}</h4>
                        <Tags items={tags}/>
                    </div>
                    <div className="widget clearfix">
                        <div className="center">
                            <Button href={'#myModal1'} text={'Subscribe'}/>
                        </div>
                    </div>
                </div>

                <ModalWindow id={'myModal1'}/>
            </div>
        );
    }
}