import React, { Component, Fragment } from 'react';
import ReactDom from 'react-dom';

import './layout.css';

import Menu from './components/Menu/Menu';
import Login from './components/Login/Login';
import MenuFooter from './components/MenuFooter/MenuFooter';
import LoginForm from './components/LoginForm/LoginForm';

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
  constructor(props) {
    super(props);

    this.state = {
      isModal: false,
    }
  }

  handleModal = () => {
    if(this.state.isModal === false) {
    this.setState({ isModal: true });
    } else {
      this.setState({ isModal: false });
    }
  }

  render() {
    const {isModal} = this.state;
    return (
      <Fragment>
        <div className="box">
        <div className="header">
          <Menu items={menuItems} />
          {isModal && <LoginForm />}
          <button className="login" onClick={this.handleModal}>ВХОД</button>
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