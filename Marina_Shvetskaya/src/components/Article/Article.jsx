import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, CardHeader, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import CommentForm from '../CommentForm';
import Comments from '../Comments';

export default class Article extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: props.defaultOpen,
      comments: [],
    }
  }

  static propTypes = {
    articles: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        date: PropTypes.number.isRequired,
      })
    )
  };

  handleClick = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  };

  handleComment = (comment) => {
    this.setState((prevState) => ({
      ...prevState,
      comments: prevState.comments.concat([comment]),
    }))
  };

   render() {
    const {article} = this.props;
    const text = this.state.isOpen && <CardText>{article.text}</CardText>;
    const { comments } = this.state;

     return (
      <div>
        <Card className="mb-4 pb-4">
          <CardHeader>
            date: {article.date}
            <p className="mb-2 text-primary float-right">{article.category}</p>
          </CardHeader>
          <CardBody>
            <CardTitle>{article.title}</CardTitle>
            <CardSubtitle className="mb-2">{article.subtitle}</CardSubtitle>
            {text}
            <button onClick={this.handleClick} className="btn btn-primary">
              {this.state.isOpen ? 'Close' : 'Open'}
            </button>
          </CardBody>
          <CommentForm onSend={this.handleComment} />
          <Comments comments = {comments} />
        </Card>
      </div>
    )
  }
}