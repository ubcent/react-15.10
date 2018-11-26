import React from 'react';
import MenuList from '../MenuList';
import {Link} from 'react-router-dom';

import {menuItems} from '../data/menuItems.js';

export default function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container">
                <Link className="navbar-brand" to="/">Wellcome to my blog</Link>
                <div className="collapse navbar-collapse">
                    <MenuList>{ menuItems }</MenuList>
                </div>
            </div>
        </nav>
    )
}