import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class CommentForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isCommentOpen: false,
      author: '',
      message: '',
    }
  }

  static propTypes = {
    onSend: PropTypes.func,
  };

  handleCommentClick = () => {
    this.setState({
      isCommentOpen: !this.state.isCommentOpen
    })
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  };

  handleSendClick = () => {
    const { onSend } = this.props;

    this.setState({
      author: '',
      message: '',
    });

    if (typeof onSend === 'function') {
      onSend(this.state);
    }
  };

   render() {
     const { author, message } = this.state;

     const commentForm = (
       <Form>
         <FormGroup row>
           <Col md={{size: 10, offset: 1}}>
             <Label for="username">Name</Label>
             <Input onChange={this.handleChange} type="text" name="author" value={author} id="username" />
           </Col>
         </FormGroup>
         <FormGroup row>
           <Col md={{size: 10, offset: 1}}>
             <Label for="exampleText">Comment</Label>
             <Input onChange={this.handleChange} type="textarea" name="message" value={message} id="exampleText" />
           </Col>
         </FormGroup>
         <FormGroup check row>
           <Col md={{ size: 10 }}>
             <Button onClick={this.handleSendClick}>Send</Button>
           </Col>
         </FormGroup>
       </Form>
       );
    const commentBlock = this.state.isCommentOpen && <div>{commentForm}</div>;

    return (
      <Fragment>
        <Col md={{size: 10}}>
          <button onClick={this.handleCommentClick} className="btn btn-primary mb-2">Comments</button>
        </Col>
        {commentBlock}
      </Fragment>
    )
  }
}