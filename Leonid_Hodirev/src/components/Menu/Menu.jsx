import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap';

import PropTypes from 'prop-types';

// statefull
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
            <Navbar color="dark" className="fixed-top" dark expand="lg">
                <Container>
                    {/*<ModalExample color="danger" title="primary" buttonLabel="Авторизация"/>*/}
                    <NavbarBrand href="/">{this.props.title}</NavbarBrand>
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            {this.props.items.map((item, id) => <NavItem key={id}><NavLink
                                href={item.href}>{item.title}</NavLink></NavItem>)}
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        );
    }
}

Menu.propType = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.isRequired,
            href: PropTypes.string.isRequired,
        })
    )
};

Menu.defaultProps = {
    title: '',
    items: [],
};


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