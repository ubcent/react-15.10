import React, { Component } from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import data from './source/itemsMenu.jsx';
import articles from './source/article';
import categories from './source/categories';
import archives from './source/archives';

import Container from './components/Container';
import Content from './components/Content';
import Menu from './components/Menu';
import Categories from './components/Categories';
import Mymodal from './components/Modal';

class Layout extends Component {
  
  render() {
    return (
      <Container>
        <Menu items = {data} titleBlog = "My SuperBlog" />
        <Mymodal />
        <div className="row mt-5">
          <Content articles = {articles} />
          <div className="col-4">
            <Categories items = {categories} title = "Categories" />
            <Categories items = {archives} title = "Archives" />
          </div>
        </div>
      </Container>
    )
  }
}

ReactDom.render(<Layout />, document.getElementById('root'));