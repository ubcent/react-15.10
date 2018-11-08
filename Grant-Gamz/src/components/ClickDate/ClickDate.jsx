import './ClickDate.css';

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

export default class ClickDate extends Component {
    render() {
		const {title} = this.props;
        return (
	      <div> <b>{title}</b>		 
		  <button type="button" class="btn btn-primary btn-lg ClickDate" data-toggle="modal" data-target="#myModal">ClickDate</button>
		  
		  <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
		  <div class="modal-dialog" role="document">
			<div class="modal-content">
			  <div class="modal-header">
				<button type="button" class="close" data-dismiss="modal" aria-label="Close">
				  <span aria-hidden="true">&times;</span>
				</button>
				<h4 class="modal-title" id="myModalLabel">Текущая дата</h4>
			  </div>
			  <div class="modal-footer">
			  var now = new Date();
			  alert( now );
			  </div>
			</div>
		</div>
		</div>

			</div>
        );
    }
}