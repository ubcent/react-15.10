import './Alert.css';

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

$(document).ready(function(){  
      $("#Hello").css('display','block');
	  
	  $("#closem").click(function(){
		   $("#Hello").css('display','none');
	  });
});         

export default class Alert extends Component {
     render() {
		const {title} = this.props;
        return (
	      <div> <b>{title}</b>				  
				  <div class="modal alertm" id="Hello" tabindex="-1" role="dialog" aria-hidden="true">
				  <div class="modal-dialog" role="document">
					<div class="modal-content">
					  <div class="modal-header">
						<button type="button" class="close" id="closem" data-dismiss="modal" aria-label="Close">
						  <span aria-hidden="true">&times;</span>
						</button>
						<h4 class="modal-title" id="myModalLabel"></h4>
					  </div>
					  <div class="modal-body">												
					  Здравствуйте
					  </div>
					  <div class="modal-footer">
					  </div>
					</div>
					</div>
					</div>
			</div>
        );
    }
}


