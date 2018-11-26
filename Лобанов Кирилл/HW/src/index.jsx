import React, {Component, Fragment} from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './normalize.css';
import './bootstrap.css';

import Header from './components/Header';
import Menu from './components/Menu';
import Logo from './components/Logo';
import Content from './components/Content';
import Search from './components/Search';
import Article from './components/Article';
import Sideber from './components/Sidebar';
import Categories from './components/Categories';
import Home from './components/Home';
import CommentsContainer from 'containers/CommentsContainer';

import routes from './routes';

const itemsMenu = [
  {href: '/', title: 'Home'},
  {href: '/blog', title: 'Blog'},
  {href: '/comments', title: 'Comments'},
  {href: '/users', title: 'Users'},
];


class App extends Component {



  render() {
    return (
      <Fragment>
        <Header>
          <Logo/>
          <Menu items={itemsMenu}/>
        </Header>
        <Content>
          <Switch>
            {routes.map((route, idx) => <Route key={idx} {...route} />)}
          </Switch>
          <Sideber>
            <Search/>
            <Categories/>
          </Sideber>
        </Content>
      </Fragment>
    )
  }
}

ReactDom.render(
  <BrowserRouter><App /></BrowserRouter>,
  document.getElementById('root'));