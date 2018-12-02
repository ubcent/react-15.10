import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';

function MenuList({ location, children, isLogin }) {
    const list = children.map((item, idx) => {
        if (isLogin && item.href === '/login') {
            item.href = '/logout';
            item.name = 'Logout';
        } else if (!isLogin && item.href === '/logout') {
            item.href = '/login';
            item.name = 'Login';
        }
        return (
            <li key={ idx } className={ location.pathname === item.href ? 'nav-item active' : 'nav-item' }>
                <Link className="nav-link" to={ item.href }>{ item.name }</Link>
            </li>
        )
    });

    return <ul className="navbar-nav ml-auto">{ list }</ul>;
}

MenuList.propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired,
    }),
    children: PropTypes.arrayOf(PropTypes.shape({
        href: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    })),
    isLogin: PropTypes.bool.isRequired,
}

export default withRouter(MenuList)