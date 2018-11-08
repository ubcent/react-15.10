import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

export default class Menu extends Component {
  static propTypes = {
    titleBlog: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        href: PropTypes.string.isRequired,
      })
    )
  };

  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    const {items, titleBlog} = this.props;
    return (
      <Fragment>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">{titleBlog}</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {items.map((item, idx) => <NavItem key={idx}><NavLink href={item.href}>{item.title}</NavLink></NavItem>)}
            </Nav>
          </Collapse>
        </Navbar>
      </Fragment>
    )
  }
}

