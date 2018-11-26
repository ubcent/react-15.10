import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Nav from './Nav';

import './style.css';

import routes from './data/routes.js';

export default function App() {
    const page = routes.map((route, idx) => 
        <Route key={ idx } {...route} />
    );
    return (
        <div className="container">
            <Nav/>
            <div className="jumbotron">
                <h2 className="display-3">App name</h2>
            </div>
            <Switch>{ page }</Switch>
        </div>
    )
}