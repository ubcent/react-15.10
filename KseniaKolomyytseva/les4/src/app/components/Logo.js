import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Logo extends Component {
    render() {
        return (
            <div id="logo">
                <Link to="/" className="standard-logo"><img src={ this.props.srcLogoStandard } alt={ this.props.alt }/></Link>
                <Link to="/" className="retina-logo"><img src={ this.props.srcLogoRetina } alt={ this.props.alt }/></Link>
            </div>
        );
    }
}