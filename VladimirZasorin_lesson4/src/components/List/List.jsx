import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Article from '../Article';
import User from '../User';
import Comment from '../Comment';

export default class List extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { elements } = this.props;
        const list = elements.map((element, idx) =>
            <li key={ idx } className="article-list__li">{ this.typeOfElement(element) }</li>
        );
        return <ul>{ list }</ul>;
    }

    typeOfElement = (element) => {
        const { type } = this.props;
        switch (type) {
            case "posts" : return <Article element={ element } noRef={ false } />;
            case "users" : return <User element={ element } noRef={ false } />;
            case "comments" : return <Comment element={ element } noRef={ false } />;
        }
    }
}

List.propTypes = {
    elements: PropTypes.arrayOf(PropTypes.object).isRequired,
    type: PropTypes.string.isRequired,
}