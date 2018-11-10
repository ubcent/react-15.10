import React, {Component} from 'react';
import ReactDom from 'react-dom';

import Menu from './components/Menu';
import Container from './components/Container';
import List from './components/List';
import Counter from './components/Counter';
import CommentForm from './components/CommentForm';

const items = [
  {href: '/', title: 'Home'},
  {href: '/news', title: 'News'},
  {href: '/blog', title: 'Blog'}
];

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      comments: [],
    }
  }
  handleComment = (comment) => {
    this.setState((prevState) => ({
      ...prevState,
      comments: prevState.comments.concat([comment]),
    }));
    console.log(comment);
  };

  render() {
    const {comments} = this.state;

    return (
        <div className="box">
          <Container>
            <Menu items={items} title={'Title'}/>
            Hello World
            <List items={['MongoDB', 'RethinkDB', 'MySql']}/>
            <Counter/><br/>
            <ul>
              {comments.map((comment, idx) => <li key={idx}>{comment.author}:{comment.message}</li>)}
            </ul>
            <CommentForm onSend={this.handleComment}/>
          </Container>
        </div>
    )
  }
}

ReactDom.render(<App/>, document.getElementById('root'));