import './Menu.css';

import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import LoginForm from "../LoginForm/LoginForm";

export default class Menu extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    static propTypes = {
        id: PropTypes.string.isRequired,
        logo: PropTypes.string,
        items: PropTypes.arrayOf(PropTypes.shape({
            title: PropTypes.string.isRequired,
            href: PropTypes.string.isRequired,
            id: PropTypes.string,
        }))
    }

    static defaultProps = {
        logo: "MyApp",
        items: [],
        id: null,
    }

    render() {
        const {id, logo, items} = this.props;
        return (
            <div className="row" id={id}>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">{logo}</NavbarBrand>
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                                {items.map((item) =>
                                    <NavItem>
                                        <NavLink href={item.href} id={item.id}>{item.title}</NavLink>
                                    </NavItem>
                                )}
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}