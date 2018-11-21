import React, {Component, Fragment} from 'react';
import ReactDom from 'react-dom';
import {Container, Row, Col} from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

import List from './components/List';
import Counter from './components/Counter';
import CommentForm from './components/CommentForm';
import Article from './components/Article';
import Card from './components/Card';
import Search from './components/Search';
import Menu from './components/Menu';

import './css/style.css';
import PropTypes from "prop-types";

const items = [
    {href: '#', title: 'Home'},
    {href: '#', title: 'About'},
    {href: '#', title: 'Services'},
    {href: '#', title: 'Contact'},
];


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            comments: []
        }
    }

    static propTypes = {
        onSend: PropTypes.func,
    };

    handleComment = (comment) => {
        // console.log(comment);

        this.setState((prevState) => ({
            ...prevState,
            comments: prevState.comments.concat([comment]),
        }))
    };

    render() {
        return (
            <Fragment>
                <Menu items={items} title="Start Bootstrap"/>
                <Container>
                    {/*<CommentForm onSend={this.handleComment}/>*/}
                    {/*<Counter/>*/}
                    <Row>
                        <Col md="8">
                            <h1 className="my-4">Page Heading<small>Secondary Text</small></h1>
                            <Card/>
                            <Card/>
                            <Card/>
                        </Col>
                        <Col md="4">
                            <Search/>
                        </Col>
                        {/*<Col xl="3">.col</Col>*/}
                        {/*<Col xl="3">.col</Col>*/}
                        {/*<Col xl="12">*/}
                            {/*<Article*/}
                                {/*head="Hello, world!"*/}
                                {/*lead="This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information."*/}
                                {/*text="It uses utility classes for typography and spacing to space content out within the larger container."*/}
                            {/*/>*/}
                        {/*</Col>*/}
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

ReactDom.render(<App/>, document.getElementById('root'));
{/*<Menu items={items} title="Start Bootstrap"/>*/}