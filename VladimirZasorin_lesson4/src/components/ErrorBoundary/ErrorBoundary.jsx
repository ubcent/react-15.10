import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ErrorBoundary extends Component {
    state = {
        hasError: false,
    }

    componentDidCatch(error, info) {
        console.log('error', error);
        console.log('info', info);
        this.setState({ hasError: true });
    }
    
    render() {
        if (this.state.hasError) {
            return (
                <div>
                    <p>Looks like an error has occurred :(</p>
                    <button onClick={ () => console.log('Error message') }>
                        Report an error
                    </button>
                </div>
            )
        } else {
            return this.props.children;
        }
    }
}

ErrorBoundary.propTypes = {
    children: PropTypes.any.isRequired,
}