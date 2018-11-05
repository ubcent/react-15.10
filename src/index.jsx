import './style.scss';

import React, { Component, Fragment } from 'react';
import ReactDom from 'react-dom';

import Container from './components/Container';
import Menu from './components/Menu';
import Button from './components/Button';

const itemsMenuHorizontal = [
  {href: '/', title: 'Home'},
  {href: '/news', title: 'News'},
  {href: '/blog', title: 'Blog'}
];

const itemMenuVertical = [
  {href: '/', title: 'Home'},
  {href: '/news', title: 'News'},
  {href: '/blog', title: 'Blog'}
];

const fields = [{name: 'hjgajhgasj'}]

class App extends Component {
  render() {
    return (
      <Container>
        <div className="menu-and-login">
          <Menu items = {itemsMenuHorizontal} type = 'horizontal' />
          <Button text = 'Login' type = 'login' />
        </div>
        <Fragment>
          <Menu items = {itemMenuVertical} type='vertical' />
        </Fragment>
      </Container>
    )
  }
}

ReactDom.render(<App />, document.getElementById('app'));