import React, {Component, Fragment} from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Container, Row, Col} from 'reactstrap';
import { Provider } from 'react-redux';


import 'bootstrap/dist/css/bootstrap.min.css';

import Menu from './components/Menu';
import Search from './components/Search';
import routes from './routes';
import store from './store';

const items = [
    {href: '#', title: 'Home'},
    {href: '#', title: 'About'},
    {href: '#', title: 'Services'},
    {href: '#', title: 'Contact'},
];

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <Menu items={items} title="Start Bootstrap"/>
                <Container className="main">
                    <Row>
                        <Col md="8">
                            <Switch>
                                {routes.map((route, idx) => <Route key={idx} {...route} />)}
                            </Switch>
                        </Col>
                        <Col md="4">
                            <Search/>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

ReactDom.render(
    <Provider store={store}><BrowserRouter><App/></BrowserRouter></Provider>,
    document.getElementById('root')
);