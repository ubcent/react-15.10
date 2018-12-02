import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import Nav from 'components/Nav';

import 'bootstrap/dist/css/bootstrap.css';
import './style.css';

import routes from './routes';
import store from './store';

function App() {
    const list = routes.map((route, idx) =>
        <Route key={ idx } { ...route }/>
    );
    return (
        <div className="container">
            <Nav />
            <div className="jumbotron">
                <h2 className="display-3">App name</h2>
            </div>
            <Switch>
                { list }
            </Switch>
        </div>
    )
}


render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
document.getElementById('root'));