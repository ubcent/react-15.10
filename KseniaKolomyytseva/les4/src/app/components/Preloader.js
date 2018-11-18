import React, { Component } from 'react';

export default class Preloader extends Component {
    render() {
        return (
            <div className="center">
                { this.props.show ? <img src="/images/preloader.gif" alt="Ожидаем загрузку"/> : '' }
            </div>
        );
    }
} 