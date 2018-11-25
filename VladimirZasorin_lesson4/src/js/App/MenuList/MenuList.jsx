import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom';

class MenuList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const menuItems = this.props.children;
        const {location} = this.props;
        const list = menuItems.map((item, idx) => {
            return (
                <li key={ idx } className={ location.pathname === item.href ? 'nav-item active' : 'nav-item' }>
                    <Link className="nav-link" to={ item.href }>{ item.name }</Link>
                </li>
            )
        });

        return <ul className="navbar-nav ml-auto">{ list }</ul>;
    }
}

export default withRouter(MenuList)