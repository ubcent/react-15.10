import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        if (this.emailCorrect && this.passwordCorrect) {
            this.props.onLogin({
                email: this.state.email,
                password: this.state.password,
            });
            this.setState({
                email: '',
                password: '',
            });
        }
    }

    emailHandleChange = event => {
        this.setState({ email: event.target.value });
        const patternEmail = /^([\w._%+-]+)@([\w.-]+)\.([\w]{2,4})$/;
        this.emailCorrect = !patternEmail.test(event.target.value) ? false : true;
    }

    passwordHandleChange = event => {
        this.setState({ password: event.target.value });
        this.passwordCorrect = event.target.value.length > 3 ? true : false;
    }

    render() {
        return (
            <form className="mx-auto article" onSubmit={ this.handleSubmit }>
                <div className="form-group">
                    <label>Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        ref="email"
                        value={ this.state.email }
                        onChange={ this.emailHandleChange }
                        placeholder="Enter email"/>
                    <div className={!this.emailCorrect ? "bg-danger" : "bg-danger invisible"}>
                        Enter your e-mail address in the format: login@host.com
                    </div>
                    <small className="form-text text-muted">
                        We'll never share your email with anyone else.
                    </small>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control"
                        value={ this.state.password }
                        onChange={ this.passwordHandleChange }
                        placeholder="Enter password"/>
                    <div className={!this.passwordCorrect ? "bg-danger" : "bg-danger invisible"}>
                        Password must be 4 symbols length
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        )
    }
}

Login.propTypes = {
    onLogin: PropTypes.func.isRequired
}