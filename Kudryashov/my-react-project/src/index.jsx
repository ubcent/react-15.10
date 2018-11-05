import React, { Component, Fragment } from 'react';
import ReactDom from 'react-dom';

import './layout.css';

import Menu from './components/Menu/Menu'
import Login from './components/Login/Login'
import MenuFooter from './components/MenuFooter/MenuFooter'

const menuItems = [
  { href: '/', title: 'Home' },
  { href: '/news', title: 'News' },
  { href: '/section1', title: 'Section 1' },
  { href: '/section2', title: 'Section 2' },
]

const menuFooterItems = [
  { href: '/', title: 'Home' },
  { href: '/about', title: 'About' },
  { href: '/contacts', title: 'Contacts' },
  { href: '/qa', title: 'Q/A' },
]

class Layout extends Component {
  render() {
    return (
      <Fragment>
        <div className="box">
        <div className="header">
          <Menu items={menuItems} />
          <Login />
        </div>
        <div className="content">
        <p>Где-то здесь контент...</p>
        </div>
        </div>
        <div className="footer">
        <MenuFooter items={menuFooterItems} />
        </div>
      </Fragment>
    )
  }
}

ReactDom.render(<Layout />, document.getElementById('blog'));