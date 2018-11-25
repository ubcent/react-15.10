import React, { Component } from 'react';

import Alert from './Alert';

export default class ModalWindow extends Component {
    constructor() {
        super( ...arguments );

        this.state = {
            send: false,
            status: ''
        };

        this._messageOk = <strong>Well done!</strong>;

        this.onSubmit = this.onSubmit.bind( this );
    }

    onSubmit() {
        let form = document.getElementById( this.props.id ),
            email = form.querySelector( '#email' ),
            status = this.state.status;

        const emailValidator = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/i;

        if ( emailValidator.test( email.value ) ) {
            status = 'ok';
        } else {
            status = 'error';
        }

        this.setState( {
            status: status,
            send: status === 'ok'
        } );
    }

    render() {
        return (
            <div className="modal1 mfp-hide subscribe-widget" id={this.props.id}>
                <div className="block dark divcenter" data-height-lg="400">
                    <div>
                        <div className="heading-block nobottomborder bottommargin-sm">
                            <h3>Newsletter Subscribe</h3>
                            <span>Get Latest Fashion Updates &amp; Offers</span>
                        </div>
                        { this.state.send === true ? <Alert message={ this._messageOk }/> : '' }
                        <form action="" role="form" method="post">
                            <input id="email" name="email" className={ [ 'form-control', 'input-lg', this.state.status === 'error' ? 'error' : '' ].join( ' ' ) }  placeholder="Enter your Email"/>
                            <button className="button button-rounded button-border button-light noleftmargin" onClick={this.onSubmit}>Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}