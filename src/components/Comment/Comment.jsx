import './Comment.css';

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

export default class Comment extends Component {
  constructor (props){
   super(props); 
   this.state={
	  author:'',
	  message:'',	  
  };
 }
 
 static propTypes={
	 onSend:PropTypes.func,
	 title: PropTypes.string,
 }
 
  handleChange =(e)=> {
	 this.setState({
		 [event.target.name]:event.target.value,
	 });
 }
 
  handleClick =()=> {
	const {onSend} = this.props;	
	this.setState({ message:''});	
	if (typeof onSend==='function'){
		onSend(this.state);
	}	
 }
 
  render() {
	const {author,message}=this.state;
	const {title} = this.props;
	return (	 
     <Fragment >
	 <b>Оставить комментарий:</b><br/>
	 <label className="side">Имя</label><input onChange={this.handleChange} name="author" value={author} type="text" /><br/>
     <label className="side">Сообщение</label><textarea onChange={this.handleChange} name="message" value={message}></textarea><br/>
	 <button onClick={this.handleClick}>Отправить</button><br/>
	 </Fragment>
    )
  }
}