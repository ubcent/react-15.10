import React, {Component} from 'react';
import ReactDom from 'react-dom';

import Menu from './components/Menu';
import Container from './components/Container';

const items = [
  {href: '/', title: 'Home'},
  {href: '/news', title: 'News'},
  {href: '/blog', title: 'Blog'}
];

class App extends Component {
  render() {
    return (
        <div className="box">
          <Container>
          <Menu items={items} title={11}/>
          Hello World
          </Container>
        </div>
    )
  }
}

ReactDom.render(<App/>, document.getElementById('root'));