import React, { Component } from 'react';
import ReactDom from 'react-dom';

import Menu from './components/Menu';
import Container from './components/Container';

const items = [
  { href: '/', title: 'Home' },
  { href: '/news', title: 'News' },
  { href: '/blog', title: 'Blog' },
];

const items1 = [
  { href: '/', title: 'Home1' },
  { href: '/news', title: 'News1' },
  { href: '/blog', title: 'Blog2' },
];

class App extends Component {
  render() {
    return (
      <div className="box">
        <Container>
          <Menu items={items} title="Main menu" />
          Hello world!
          <Menu items={items1} title="Just another menu" />
        </Container>
      </div>
    )
  }
}

ReactDom.render(<App />, document.getElementById('root'));
