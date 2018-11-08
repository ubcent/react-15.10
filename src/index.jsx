import React, { Component } from 'react';
import ReactDom from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery';

import Menu from './components/Menu';
import SideMenu from './components/SideMenu';
import Container from './components/Container';
import Login from './components/Login';
import Articles from './components/Articles';
import ProjectInfo from './components/ProjectInfo';
import Counter from './components/Counter';
import Comment from './components/Comment';
import Alert from './components/Alert';

const items = [
  { href: '/', title: 'Home' },  { href: '/news', title: 'News' },  { href: '/blog', title: 'Blog' },
];

const items1 = [
  { href: '/', title: 'Home1' },  { href: '/news', title: 'News1' },  { href: '/blog', title: 'Blog2' },
];

const items2 = [
  { href: '/', title: 'About' },  { href: '/special', title: 'Special' },  { href: '/contakcs', title: 'Contakcs' },
];

const articlesall1 = [
  {  author: 'Grant', title: 'Заголовок1', image: '../image/4.png', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s', href: '/'  },  
 ];
  
const articlesall2 = [
  {  author: 'Dvarf', title: 'Заголовок2', image: '../image/2.png', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s', href: '/'  }, 
 ];
  
const articlesall3 = [
  {  author: 'elf', title: 'Заголовок3', image: '../image/3.png', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s', href: '/'  }, 
 ];

const fio = [
  { family: 'Gamz',  name: 'Grant', secondfamily: 'Arkadievich'},  
];

class App extends Component {
  constructor(props){
	 super(props);
	 
	 this.state={
	  comments2:[], 
	  comments3:[],
	  comments4:[], 
	  }
  } 
  
  handleComment2=(comment)=>{	  
	  this.setState((prevState)=>({
		  ...prevState,
		  comments2:prevState.comments2.concat([comment]),
	  }))
  }
  
    handleComment3=(comment)=>{	  
	  this.setState((prevState)=>({
		  ...prevState,
		  comments3:prevState.comments3.concat([comment]),
	  }))
  }
  
    handleComment4=(comment)=>{	  
	  this.setState((prevState)=>({
		  ...prevState,
		  comments4:prevState.comments4.concat([comment]),
	  }))
  }

  render() {
	  const {comments,comments2,comments3,comments4}=this.state;
    return (
      <div className="box">
        <Container>
          <div className="divcontent col-md-8" ><ProjectInfo items={fio}  /></div>
		  <div className="divcontent col-md-4" ></div>
          <Menu items={items} title="Main menu" />		  
		  <div className="contentall">
		  <div className="divcontent col-md-8" >
		  <Articles items={articlesall1} onSend={this.handleComment2}/>		
			{comments2.map((comment, idx)=><z key={idx} className="linecomment"><b className="namelink">{comment.authorcom}</b> {comment.message}</z>)}
		  <Articles items={articlesall2} onSend={this.handleComment3}/>		
			{comments3.map((comment, idx)=><z key={idx} className="linecomment"><b className="namelink">{comment.authorcom}</b> {comment.message}</z>)}
		  <Articles items={articlesall3} onSend={this.handleComment4}/>
			{comments4.map((comment, idx)=><z key={idx} className="linecomment"><b className="namelink">{comment.authorcom}</b> {comment.message}</z>)}
		  </div>
		  <div className="divcontent col-md-4" >
		  <Login  title="login"/>
		  <SideMenu items={items2}  title="Side menu"/>
		  <Alert  />
		  </div>
		    
		  </div>
	
		   <Menu items={items1} title="Footer menu" />		  
        </Container>
      </div>
    )
  }
}

ReactDom.render(<App />, document.getElementById('root'));
