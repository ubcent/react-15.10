import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Menu from './Components/Menu';
import Container from './Components/Container';
import './style.css';
import ContentField from './Components/ContentField';
import Login from './Components/Login';


const items = [
  {href: '/', title: 'Home'},
  {href: '/news', title: 'News'},
  {href: '/blog', title: 'Blog'}
]

const contentItems = [
  {title: 'Some Content...'},
  {title: 'Some Content...'},
  {title: 'Some Content...'},
  {title: 'Some Content...'},
  {title: 'Some Content...'},
  {title: 'Some Content...'},
  {title: 'Some Content...'},
  {title: 'Some Content...'},
  {title: 'Some Content...'},
  {title: 'Some Content...'},
]

class App extends Component {
  render(){
    return (
      <div>
        <h1>Dyachenko Ivan's HomeWork:</h1>
        <Login />
        <Container>
        
        <Menu items={items} title='Navigation menu'/>
        <ContentField items={contentItems}/>
        </Container>  
      </div>
    )
  }
}

ReactDom.render(<App />, document.getElementById('root'));