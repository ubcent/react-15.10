import './Layout.css';
import React, { Component } from 'react';

import Menu from '../Menu';
import { Button } from 'reactstrap';

const items =[
    { href: '/', title: 'Home' },
    { href: '/news', title: 'News' },
    { href: '/blog', title: 'Blog' },
];
const items1 =[
    { href: '/', title: 'Home' },
    { href: '/news', title: 'News' },
    { href: '/blog', title: 'Blog' },
];

export default class Layout extends Component {

    render() {
        // const  {children} = this.props;
        return (
            <header className="row">
                {/*{children}*/}
                <Menu items={items} title = "Main menu" />
                Hello, buddy!
                <Menu items={items1} />
                <Button color="danger">Danger!</Button>
            </header>
        )
    }
}