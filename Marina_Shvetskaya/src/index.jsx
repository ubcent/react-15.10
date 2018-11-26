import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'components/Container';
import Categories from 'components/Categories';
import HomePage from './components/HomePage';
import BlogContainer from 'containers/BlogContainer';
import CommentsContainer from 'containers/CommentsContainer';

import categories from './source/categories';
import archives from './source/archives';
import UsersContainer from './containers/UsersContainer';

class App extends Component {
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
    return (
      <Container>
          <Navbar color="light" light expand="md">
            <NavbarBrand href="/">Блог студента Geek University</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
                <NavItem>
                    <Link className="nav-link" to="/">Главная</Link>
                </NavItem>
                <NavItem>
                    <Link className="nav-link" to="/blog">Блог</Link>
                </NavItem>
                <NavItem>
                    <Link className="nav-link" to="/comments">Комментарии</Link>
                </NavItem>
                <NavItem>
                    <Link className="nav-link" to="/users">Пользователи</Link>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
          <div className="row mt-5">
            <div className="col-8 mb-5">
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/blog" component={BlogContainer}/>
            <Route path="/comments" component={CommentsContainer}/>
            <Route path="/users" component={UsersContainer}/>
            </div>
            <div className="col-4">
              <Categories items = {categories} title = "Темы" />
              <Categories items = {archives} title = "Архив" />
            </div>
          </div>
      </Container>
    )
  }
}

ReactDom.render(
<BrowserRouter>
  <App />
</BrowserRouter>, 
document.getElementById('root'));