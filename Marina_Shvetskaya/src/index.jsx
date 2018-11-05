import React, { Component } from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'; 
import 'bootstrap/dist/js/bootstrap.bundle';

import data from './source/itemsMenu.jsx';

import Container from './components/Container';
import Content from './components/Content';
import Menu from './components/Menu';
import Sidebar from './components/Sidebar';
import Modal from './components/Modal';

class Layout extends Component {
  
  render() {
    return (
      <Container>
        <Menu items={data} title="Main menu" />
        <Modal />
        <div className="row mt-5">
          <Sidebar items={data}/>
          <Content />
        </div>
      </Container>
    )
  }
}



ReactDom.render(<Layout />, document.getElementById('root'));