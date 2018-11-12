import React, {Component, Fragment} from 'react';
import ReactDom from 'react-dom';

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


const itemsMenu = [
    {href: '#', title: 'Home'},
    {href: '#', title: 'About'},
    {href: '#', title: 'Service'},
    {href: '#', title: 'Contact'},
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
                    <Article/>
                   <Sideber>
                       <Search/>
                       <Categories/>
                   </Sideber>
                </Content>
            </Fragment>
        )
    }
}

ReactDom.render(<App/>, document.getElementById('root'));