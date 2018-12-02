import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Switch, Route, withRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import Nav from 'components/Nav';
import Login from 'components/Login';
import Logout from 'components/Logout';
import Modal from 'components/Modal';
import PrivateRoute from 'components/PrivateRoute';
import Home from 'components/Home';
import NotFound from 'components/NotFound';
import ElementContainer from 'containers/ElementContainer';
import ArticlesContainer from 'containers/ArticlesContainer';
import CommentsContainer from 'containers/CommentsContainer';
import UsersContainer from 'containers/UsersContainer';

import 'bootstrap/dist/css/bootstrap.css';
import './style.css';

import store from './store';

@withRouter
class App extends Component {
    state = {
        isModalOpen: false,
        isLogin: false,
        password: '',
        email: '',
    };

    toggleModal = ({ email, password }) => {
        this.setState(state => ({
            isModalOpen: !state.isModalOpen,
        }));
        if (email && password) {
            this.login(email, password);
        }
    };

    login = (email, password) => {
        this.setState({
            isLogin: true,
            email,
            password,
        }, () => this.props.history.push('/posts'));
    };
    
    logout = () => {
        this.setState({
            isLogin: false,
            email: '',
            password: '',
        }, () => this.props.history.push('/'));
    };

    render() {
        const isLogin = this.state.isLogin;
        return (
            <div className="container">
                {
                    this.state.isModalOpen &&
                        <Modal onClose={ this.toggleModal }>
                            <h1>You are logged in as: { this.state.email }</h1>
                        </Modal>
                }
                <Nav isLogin={ isLogin }/>
                <div className="jumbotron">
                    <h2 className="display-3">App name</h2>
                </div>
                <Switch>
                    <Route path='/' exact component={ Home } />
                    <PrivateRoute path='/posts' exact component={ ArticlesContainer } isLogin={ isLogin } />
                    <PrivateRoute path='/comments' exact component={ CommentsContainer } isLogin={ isLogin } />
                    <PrivateRoute path='/users' exact component={ UsersContainer } isLogin={ isLogin } />
                    <PrivateRoute path='/users/:id' exact component={ ElementContainer } isLogin={ isLogin } />
                    <PrivateRoute path='/posts/:id' exact component={ ElementContainer } isLogin={ isLogin } />
                    <Route path='/login' exact render={ props => <Login { ...props } onLogin={ this.toggleModal } /> }/>
                    <Route path='/logout' exact render={ props => <Logout { ...props } onLogout={ this.logout } /> }/>
                    <Route component={ NotFound } />
                </Switch>
            </div>
        )
    }
}

render(
    <Provider store={ store }>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
document.getElementById('root'));