import React, {Component, Fragment} from 'react';
import ReactDom from 'react-dom';

import Header from './components/Header';
import Menu from './components/Menu';
import Login from './components/Login';
import Content from './components/Content';
import Sidebar from './components/Sidebar';
import Article from './components/Article';


const itemsMenu = [
    {href: '/', title: 'Home'},
    {href: '/blog', title: 'Blog'},
    {href: '/topics', title: 'Topics'},
    {href: '/articles', title: 'Articles'},
    {href: '/faq', title: 'FAQ'},
];


class App extends Component {
    render() {
        return (
            <Fragment>
                <Header>
                    <Menu items={itemsMenu}/>
                    <Login/>
                </Header>
                <Content>
                    <Sidebar items={itemsMenu}/>
                    <Article/>
                </Content>
            </Fragment>
        )
    }
}

ReactDom.render(<App/>, document.getElementById('root'));