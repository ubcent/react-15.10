import React, {Component} from 'react';
import './login.css';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: '',
            pass: '',
        }
    };

    logPassSetState = (e) => {
        this.setState({
            [e.target.name]: e.target.value,

        })
    };

    logPassOutput = () => {
        const {login, pass} = this.state;
        if (login !== '' && pass !== '') {
            alert('Open console;)');
            console.log('Login: ' + login + '\n' + 'Password: ' + pass);
        }
        this.setState({
            login: '',
            pass: '',
        });
    };

    render() {
        const {login, pass} = this.state;
        return (
            <div className='loginDiv'>
                <input onChange={this.logPassSetState} type="text" name='login' placeholder='login' value={login}/>
                <input onChange={this.logPassSetState} type="password" name='pass' placeholder='password' value={pass}/>
                <button onClick={this.logPassOutput}>LogIn</button>
            </div>
        )
    };
}