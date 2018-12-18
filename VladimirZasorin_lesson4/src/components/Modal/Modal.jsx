import React, { Component, Fragment } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import './style.css';

export default class Modal extends Component {
    componentWillMount() {
        this.root = document.createElement('div');
        this.root.className = 'modal-box';
        document.body.appendChild(this.root);
    }

    componentWillUnmount() {
        document.body.removeChild(this.root);
    }

    render() {
        return createPortal(
            <Fragment>
                <button className="modal__close-button" onClick={ this.props.onClose }>Close</button>
                { this.props.children }
            </Fragment>
        ,this.root);
    }
}

Modal.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
        PropTypes.object,
    ]).isRequired,
    onClose: PropTypes.func.isRequired,
}