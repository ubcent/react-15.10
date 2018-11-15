import React, {Component} from 'react';
import ReactDom from 'react-dom';
import {Container, Row, Col} from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

import Menu from './components/Menu';
import Article from './components/Article';

import './css/style.css';

const items = [
    {href: '#', title: 'Главная'},
    {href: '#', title: 'О нас'},
    {href: '#', title: 'Контакты'},
];

class App extends Component {
    render() {
        return (
            <Container>
                <Menu items={items} />
                <Row>
                    {/*<div className="box">*/}
                    {/*Hw!*/}
                    {/*</div>*/}
                    {/*<Col xl="3">.col</Col>*/}
                    {/*<Col xl="3">.col</Col>*/}
                    {/*<Col xl="3">.col</Col>*/}
                    {/*<Col xl="3">.col</Col>*/}
                    <Col xl="12">
                        <Article
                            head="Hello, world!"
                            lead="This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information."
                            text="It uses utility classes for typography and spacing to space content out within the larger container."
                        />
                    </Col>
                </Row>
            </Container>
        )
    }
}

ReactDom.render(<App/>, document.body);