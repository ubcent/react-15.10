import React, {Component, Fragment} from 'react';
import ReactDOM from 'react-dom';
import Moment from 'moment';

import Header from './components/Header';
import Post from './components/Post';
import Container from './components/Container';
import CommentSection from './components/CommentSection';
import Footer from './components/Footer';
import WidgetSearch from './components/WidgetSearch';
import WidgetCategories from './components/WidgetCategories';

import './app.sass';

let date = Moment();

const comments = [
  {author: 'Kenny', message: 'ooohhh..'},
  {author: 'Martin', message: 'huuuuhhh..'}
]

class App extends Component {
	render() {
		return (
      <Fragment>
        <Header />
        <section>
          <Container>
            <div className="post">
              <Post timeStamp={date} />
              <hr/>
              <CommentSection comments={comments} />
            </div>
            <aside className="aside">
              <WidgetCategories />
              <WidgetSearch />
            </aside>
          </Container>
        </section>
        <Footer />
      </Fragment>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
