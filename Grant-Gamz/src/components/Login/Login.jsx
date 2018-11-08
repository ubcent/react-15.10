import './Login.css';

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

export default class Login extends Component {
    render() {
		const {title} = this.props;
        return (
	      <div> <b>{title}</b>		 
		  <button type="button" class="btn btn-primary btn-lg login" data-toggle="modal" data-target="#myModal">Login</button>		  
		  <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
		  <div class="modal-dialog" role="document">
			<div class="modal-content">
			 <div class="modal-header">
			  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
			   <span aria-hidden="true">&times;</span>
			  </button>
			  <h4 class="modal-title" id="myModalLabel">Авторизация</h4>
			  </div>
			  <div class="modal-body">
			  <input type="text" className="form-control" placeholder="Логин" aria-describedby="basic-addon1"/>
               		  <input type="text" className="form-control" placeholder="Пароль" aria-describedby="basic-addon2"/>
			  </div>
			  <div class="modal-footer">
			   <button type="button" class="btn btn-secondary" data-dismiss="modal">Войти</button>
			   <button type="button" class="btn btn-primary">Регистрация</button>
			  </div>
			</div>
		 </div>
		</div>
	     </div>
        );
    }
}
