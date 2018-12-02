import React from 'react';
import PropTypes from 'prop-types';
import {Link, withRouter} from 'react-router-dom';

function MenuList({ location, children }) {
    const list = children.map((item, idx) => {
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
}

export default withRouter(MenuList)