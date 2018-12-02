import React, { Component, Fragment } from 'react';

import Article from 'components/Article';
import User from 'components/User';

export default class ElementContainer extends Component {
    constructor({ match, ...props}) {
        super(...props);

        this.state = {
            loading: true,
            element: {},
        }

        this.type = match.url.split('/')[1];
        this.id = match.params.id;
    }

    componentDidMount() {
        this.setState({ loading: true });
        fetch(`https://jsonplaceholder.typicode.com/${ this.type }/${ this.id }`)
            .then((response) => response.json())
            .then((element) => {
                this.setState({
                    loading: false,
                    element,
                })
            })
            .catch(() => { this.setState({ loading: false }); });
    }

    render() {
        return (
            <Fragment>
                { this.typeOfElement(this.state.element) }
            </Fragment>
        )
    }

    typeOfElement = (element) => {
        switch (this.type) {
            case "posts" : return <Article element={ element } noRef={ true } />;
            case "users" : return <User element={ element } noRef={ true } />;
        }
    }
}