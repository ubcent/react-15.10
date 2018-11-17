import React, {Component} from 'react';
import ReactDom from 'react-dom';

import Menu from 'components/Menu';
import Container from 'components/Container';
import List from 'components/List';
import Counter from 'components/Counter';
import CommentForm from 'components/CommentForm';
import CommentsContainer from 'containers/CommentsContainer';

const items = [
  {href: '/', title: 'Home'},
  {href: '/news', title: 'News'},
  {href: '/blog', title: 'Blog'}
];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: [],
      isModal: false,
    }
  }

  handleOpen = (e) => {
    this.setState({isModal: !this.state.isModal});
  }

  handleComment = (comment) => {
    this.setState((prevState) => ({
      ...prevState,
      comments: prevState.comments.concat([comment]),
    }));
    console.log(comment);
  };

  render() {
    const {comments, isModal} = this.state;

    return (
        <div className="box">
          <CommentsContainer/>
        </div>
    )
  }
}

ReactDom.render(<App/>, document.getElementById('root'));