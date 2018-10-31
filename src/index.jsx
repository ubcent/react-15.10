import React, { Component } from 'react';
import ReactDom from 'react-dom';

import Menu from './components/Menu';
import SideMenu from './components/SideMenu';
import Container from './components/Container';
import Login from './components/Login';
import Content from './components/Content';
import ProjectInfo from './components/ProjectInfo';
//import ClickDate from './components/ClickDate';

const items = [
  { href: '/', title: 'Home' },  { href: '/news', title: 'News' },  { href: '/blog', title: 'Blog' },
];

const items1 = [
  { href: '/', title: 'Home1' },  { href: '/news', title: 'News1' },  { href: '/blog', title: 'Blog2' },
];

const items2 = [
  { href: '/', title: 'About' },  { href: '/special', title: 'Special' },  { href: '/contakcs', title: 'Contakcs' },
];

const fio = [
  { family: 'Gamz',  name: 'Grant', secondfamily: 'Arkadievich'},  
];

class App extends Component {
  render() {
    return (
      <div className="box">
        <Container>
          <div className="divcontent col-md-8" ><ProjectInfo items={fio}  /></div>
		  <div className="divcontent col-md-4" ></div>
          <Menu items={items} title="Main menu" />		  
		  <div className="contentall">
		  <div className="divcontent col-md-8" ><Content /></div>
		  <div className="divcontent col-md-4" >
		  <Login  title="login"/>
		  
		  <SideMenu items={items2}  title="Side menu"/></div>
		  </div>
          <Menu items={items1} title="Footer menu" />
		  
        </Container>
      </div>
    )
  }
}

ReactDom.render(<App />, document.getElementById('root'));
