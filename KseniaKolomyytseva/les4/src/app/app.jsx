import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Main from './layouts/Main';
import Index from './pages/Index';
import Blog from './pages/Blog';
import Comments from './pages/Comments';
import Users from './pages/Users';
import Error404 from './pages/Error404';

const app = document.getElementById( 'app' );

ReactDOM.render(
    <Router history={ browserHistory }>
        <Route path="/" component={ Main }>
            <IndexRoute component={ Index }/>
            <Route path="blog/" component={ Blog }/>
            <Route path="comments/" component={ Comments }/>
            <Route path="users/" component={ Users }/>
            <Route path="*" component={ Error404 }/>
        </Route>
    </Router>
, app ); 