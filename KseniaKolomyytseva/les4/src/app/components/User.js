import React, { Component } from 'react';

export default class User extends Component {
    render() {
        return (
            <div className="col-md-3 col-sm-6 bottommargin">

                <div className="team">
                    <div className="team-image">
                        <img src={ '/images/team/' + this.props.data.id + '.jpg' } alt={ this.props.data.name }/>
                    </div>
                    <div className="team-desc">
                        <div className="team-title">
                            <h4>{ this.props.data.name }</h4>
                            <span>{ this.props.data.company.name }</span>
                        </div>
                        <a href="#" className="social-icon inline-block si-small si-light si-rounded si-facebook">
                            <i className="icon-facebook"/>
                            <i className="icon-facebook"/>
                        </a>
                        <a href="#" className="social-icon inline-block si-small si-light si-rounded si-twitter">
                            <i className="icon-twitter"/>
                            <i className="icon-twitter"/>
                        </a>
                        <a href="#" className="social-icon inline-block si-small si-light si-rounded si-gplus">
                            <i className="icon-gplus"/>
                            <i className="icon-gplus"/>
                        </a>
                    </div>
                </div>

            </div>
        );
    }
} 