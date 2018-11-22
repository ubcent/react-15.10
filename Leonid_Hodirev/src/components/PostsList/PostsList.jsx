import './PostsList.css';

import React, {Component, Fragment} from 'react';
import Card from 'components/Card';

//  statefull
export default class PostsList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {posts} = this.props;

        return (
            <Fragment>
                {posts.map(({title, body, id}, idx) =>
                    <Card key={idx} title={title} body={body} id={id}/>
                )}
            </Fragment>
        )
    }
}