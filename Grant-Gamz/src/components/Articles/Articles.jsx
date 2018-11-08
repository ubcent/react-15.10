import './Articles.css';

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

export default class Articles extends Component {
  static propTypes = {
    author: PropTypes.string,
	title: PropTypes.string,
	image: PropTypes.any,
	text: PropTypes.string,
	onSend:PropTypes.func,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        href: PropTypes.string.isRequired,	
		author: PropTypes.string.isRequired,		
		image: PropTypes.any.isRequired,
		text: PropTypes.string.isRequired,
      })
    )
  }
  
  constructor (props){
   super(props);
  // 
   this.state={
	  counter:1,
	  authorcom:'',
	  message:'', 
  };
 }

  static defaultProps = {
    items: [],
  }
  
  handleClick=(e)=>{
	const addition = event.target.name==="like"?1:-1;
	this.setState((prevState)=>({
		...prevState,
		counter: prevState.counter+addition,
	}));	
 }
 
   handleChange =(e)=> {
	 this.setState({
		 [event.target.name]:event.target.value,
	 });
   }
 
 
  handleClickSend =()=> {
	const {onSend} = this.props;	
	this.setState({ message:''});	
	if (typeof onSend==='function'){
		onSend(this.state);
	}	
 }

  render() {
    const {title, items} = this.props;
	const {counter,authorcom,message} = this.state;	
	
    return (
      <Fragment>        
        <div className="articles">	
          {items.map((item) => <div className="art-one" >  <a href={item.href}>{item.title}</a><p className="author">Автор: {item.author}</p> <br/> <img src={item.image}/> <div>{item.text}</div>  
		    <div>
			<Fragment>Нравиться: </Fragment><b className="artcel">{counter}</b>
			<img src="../image/like.png" name="like" value="Yes" onClick={this.handleClick}/><Fragment>Да</Fragment>
			<img src="../image/dislike.png" name="notlike" value="No" onClick={this.handleClick}/><Fragment> Нет</Fragment>
			</div> 	

			<div className="comment">
		    <Fragment><b>Оставить комментарий:</b><br/>
			<label className="side">Имя</label><input onChange={this.handleChange} name="authorcom" value={authorcom} type="text" /><br/>
			<label className="side">Сообщение</label><textarea onChange={this.handleChange} name="message" value={message}></textarea><br/>
			<button onClick={this.handleClickSend}>Отправить</button><br/></Fragment>
		    </div> 	

			
			</div>)}
        </div>
      </Fragment>
    )
  }
}
