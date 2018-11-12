import './Layout.css';
import React, {Component} from 'react';

import Menu from '../Menu';
import LoginForm from '../LoginForm';
import {
    Jumbotron, Button, Breadcrumb, BreadcrumbItem,
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';

const items = [
    {href: '/', title: 'Home'},
    {href: '/news', title: 'News'},
    {href: '/blog', title: 'Blog'},
    {href: '/', title: 'Login', id: 'login'},
];

export default class Layout extends Component {

    render() {
        return (
            <div className="container">
                <header className="container">
                    <Menu items={items} id="main_menu"/>

                    <LoginForm/>

                    {/*split to another component*/}
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
                            <BreadcrumbItem><a href="#">Library</a></BreadcrumbItem>
                            <BreadcrumbItem active>Data</BreadcrumbItem>
                        </Breadcrumb>
                    </div>
                    <div className="row">
                        <Jumbotron>
                            <h1 className="display-3">Hello, world!</h1>
                            <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for
                                calling extra attention to featured content or information.</p>
                            <hr className="my-2"/>
                            <p>It uses utility classes for typography and spacing to space content out within the larger
                                container.</p>
                            <p className="lead">
                                <Button color="primary">Learn More</Button>
                            </p>
                        </Jumbotron>
                    </div>
                </header>

                <div className="container">
                    <main className="row">
                        <aside className="col-3">
                            /*empty*/
                        </aside>

                        <section className="col-9">
                            {/*split to another component*/}
                            <div className="row">
                                <div className="col">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
                                                 alt="Card image cap"/>
                                        <CardBody>
                                            <CardTitle>Card title</CardTitle>
                                            <CardSubtitle>Card subtitle</CardSubtitle>
                                            <CardText>Some quick example text to build on the card title and make up the
                                                bulk of the card's content.</CardText>
                                            <Button>Button</Button>
                                        </CardBody>
                                    </Card>
                                </div>
                                <div className="col">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
                                                 alt="Card image cap"/>
                                        <CardBody>
                                            <CardTitle>Card title</CardTitle>
                                            <CardSubtitle>Card subtitle</CardSubtitle>
                                            <CardText>Some quick example text to build on the card title and make up the
                                                bulk of the card's content.</CardText>
                                            <Button>Button</Button>
                                        </CardBody>
                                    </Card>
                                </div>
                                <div className="col">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
                                                 alt="Card image cap"/>
                                        <CardBody>
                                            <CardTitle>Card title</CardTitle>
                                            <CardSubtitle>Card subtitle</CardSubtitle>
                                            <CardText>Some quick example text to build on the card title and make up the
                                                bulk of the card's content.</CardText>
                                            <Button>Button</Button>
                                        </CardBody>
                                    </Card>
                                </div>
                            </div>
                        </section>
                    </main>
                </div>

                <footer className="container-fluid bg-dark">
                    <small className="text-light">Copyright &copy;
                        <time datetime="2018">2018</time>
                    </small>
                </footer>

            </div>

    )
    }
}