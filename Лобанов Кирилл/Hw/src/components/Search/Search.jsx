import React, {Component} from 'react';
import './Search.css'
import PropTypes from "prop-types";

export default class Search extends Component {


    render() {
        return (
            <div className="comment search">
                <h5 className="comment-head"> Search:</h5>
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Search for..."/>
                <span className="input-group-btn">
                  <button className="btn btn-secondary" type="button">Go!</button>
                </span>
                </div>
            </div>
        )
    }
}