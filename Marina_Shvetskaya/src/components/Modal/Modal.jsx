import React, { Component, Fragment } from 'react';
import 'bootstrap/dist/js/bootstrap.bundle';


export default class Modal extends Component {

  state = {
    isShow: true
  };
 
  render() {
    const modal = <div className="modal fade" id="myModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">New message</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <form>
            <div className="form-group">
              <label for="recipient-name" className="col-form-label">Login:</label>
              <input type="text" className="form-control" id="recipient-name" />
            </div>
            <div className="form-group">
              <label for="message-text" className="col-form-label">Password:</label>
              <input type="text" className="form-control" id="recipient-name" />
            </div>
          </form>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" className="btn btn-primary">Send</button>
        </div>
      </div>
    </div>
    </div>

    const modalWindow = this.state.isShow && modal;
    return (
      <Fragment>
        <button onClick={this.handleClick} type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal" >Log in</button>
        {modalWindow}
      </Fragment>
    )
  }

  handleClick = () => {
    this.setState({
      isShow: !this.state.isShow
    })
  }
}

