import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class Article extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }

    render() {
        const { element, noRef } = this.props;
        const body = this.state.isOpen && <section className="card-text">{ element.body }</section>;
        if (!noRef) {
            return (
                <div className="card mx-auto article">
                    <div className="card-header">
                        <h2>
                            <Link to={ `/posts/${ element.id }` }>{ element.title }</Link>
                            <button onClick={ this.handleClick } className="btn btn-primary btn-lg float-right">
                                { this.state.isOpen ? 'close' : 'open' }
                            </button>
                        </h2>
                    </div>
                    <div className="card-body">
                        <h6><Link to={ `/users/${ element.userId }` }>User ID: { element.userId }</Link></h6>
                        { body }
                    </div>
                </div>
            )
        } else {
            return (
                <div className="card mx-auto article">
                    <div className="card-header">
                        <h2>
                            { element.title }
                        </h2>
                    </div>
                    <div className="card-body">
                        <h6>User ID: { element.userId }</h6>
                        <section className="card-text">{ element.body }</section>
                    </div>
                </div>
            )
        }
    }

    handleClick = () => this.setState(state => ({ isOpen: !state.isOpen }));
}

Article.propTypes = {
    element: PropTypes.shape({
        id: PropTypes.number,
        userId: PropTypes.number,
        body: PropTypes.string,
        title: PropTypes.string,
    }),
}