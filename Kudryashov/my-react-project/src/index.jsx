import React, { Component, Fragment } from 'react';
import ReactDom from 'react-dom';

import './layout.css';

import Menu from './components/Menu/Menu';
import Login from './components/Login/Login';
import MenuFooter from './components/MenuFooter/MenuFooter';
import LoginForm from './components/LoginForm/LoginForm';
import ContentHome from './components/ContentHome/ContentHome';
import BlogsContainer from './containers/BlogsContainer';
import ContentAbout from './components/ContentAbout/ContentAbout';
import NewsContainer from './containers/NewsContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import routes from './routes';

const menuItems = [
  { href: '/', title: 'Home' },
  { href: '/blogs', title: 'Blogs' },
  { href: '/news', title: 'News' },
  { href: '/about', title: 'About' },
]

class Layout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isModal: false,
      // varElem: <ContentHome />,
    }
  }

  handleModal = () => {
    this.setState({ isModal: !this.state.isModal });
  }

  // handleClickMenu = () => {

    // menuItems.forEach(element => {
    //   element['title'] === event.target.text ? element['classActive'] = 'active' : delete element['classActive'];
    // });

    // switch (event.target.text) {
    //   case 'Home':
    //     this.setState({ varElem: <ContentHome /> });
    //     break;
    //   case 'Blogs':
    //     this.setState({ varElem: <BlogsContainer /> });
    //     break;
    //   case 'News':
    //     this.setState({ varElem: <NewsContainer /> });
    //     break;
    //   case 'About':
    //     this.setState({ varElem: <ContentAbout /> });
    //     break;
    //   default:
    //     break;
    // }
  // }

  render() {
    const { isModal, varElem } = this.state;
    return (
      <Fragment>
        <div className="box">
          <div className="header">
            {/* <Menu items={menuItems} onClick={this.handleClickMenu} /> */}
            <Menu items={menuItems} />
            {isModal && <LoginForm />}
            <Login onClick={this.handleModal} />
          </div>
          <div className="content">
            {/* {varElem} */}
            <Switch>
              {routes.map((route, idx) => <Route key={idx} {...route} />)}
            </Switch>
          </div>
          <div className="for-footer"></div>
        </div>
        <div className="footer">
          <MenuFooter />
        </div>
      </Fragment>
    )
  }
}

ReactDom.render(<BrowserRouter><Layout /></BrowserRouter>, document.getElementById('blog'));