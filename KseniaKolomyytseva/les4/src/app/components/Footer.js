import React, { Component } from 'react';

export default class Footer extends Component {
    render() {
        return (
            <footer id="footer">
                <div id="copyrights">
                    <div className="container clearfix">
                        <div className="col_half">
                            Copyrights &copy; 2014 All Rights Reserved by Canvas Inc.
                        </div>
                        <div className="col_half col_last tright">
                            <i className="icon-headphones"/> +7 (812) 654-63-69
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}