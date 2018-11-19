import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink } from 'reactstrap';

import Button from '../Button';
import ModalExample from "../Modal";

export default class Menu extends React.Component {
    constructor(props) {
        super(props);

        // this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <ModalExample color="danger" title="primary" buttonLabel="Авторизация" />
                    <NavbarBrand href="/">{this.props.title}</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            {this.props.items.map((item) => <NavItem><NavLink href={item.href}>{item.title}</NavLink></NavItem>)}
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}



// import './Menu.css';
// import React, { Component } from 'react';
//
// export default class Menu extends Component {
//     render() {
//         const {title, items} = this.props;
//         return (
//             <ul className="menu">
//                 {items.map((item, idx) => <li key={idx}><a href={item.href}>{item.title}</a></li>)}
//             </ul>
//         )
//     }
// }