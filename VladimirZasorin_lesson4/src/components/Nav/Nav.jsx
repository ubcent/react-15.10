import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import MenuList from '../MenuList';
import ErrorBoundary from '../ErrorBoundary';

import menuItems from './menuItems.js';

export default function Nav({ isLogin }) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container">
                <Link className="navbar-brand" to="/">Wellcome to my blog</Link>
                <div className="collapse navbar-collapse">
                    <ErrorBoundary>
                        <MenuList isLogin={ isLogin }>{ menuItems }</MenuList>
                    </ErrorBoundary>
                </div>
            </div>
        </nav>
    )
}

Nav.propTypes = {
    isLogin: PropTypes.bool.isRequired,
}