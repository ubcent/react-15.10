import React, {Component} from 'react';
import './login.css';

export default class Login extends Component {
  render() {
    return(
      <div className='loginDiv'>
        <input type="text" placeholder='login'/>
        <input type="text" placeholder='password'/>
        <button>LogIn</button>
      </div>
    )
  }
}