import React, {Component} from 'react';
import './Header.css'

export default class Header extends Component {
    render() {
        const {children} = this.props;
        return (
            <div className="header">
                <div className="container-blog disp-flex">
                {children}
                </div>
            </div>
        )
    }
}