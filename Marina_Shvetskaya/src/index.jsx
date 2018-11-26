import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'components/Container';
import Menu from 'components/Menu';

import itemsMenu from './source/itemsMenu';
import routes from './routes';
import TopPostsContainer from "containers/TopPostsContainer";


class App extends Component {
  render() {
    return (
      <Container>
        <Menu items={itemsMenu} titleBlog={"Блог студента Geek University"}/>
          <div className="row mt-5">
            <div className="col-8 mb-5">
              <Switch>
                {routes.map((route, idx) => <Route key={idx} {...route} />)}
              </Switch>
            </div>
            <div className="col-4">
              <TopPostsContainer/>
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