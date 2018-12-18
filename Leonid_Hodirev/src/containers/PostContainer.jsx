import React, {Component, Fragment} from 'react';

import Post from 'components/Post';

export default class PostContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            post: {},
        }
    }

    componentDidMount() {
        const { match } = this.props;

        this.setState({ loading: true });
        fetch(`http://jsonplaceholder.typicode.com/posts/${match.params.id}`)
            .then((response) => response.json())
            .then((post) => {
                this.setState({
                    loading: false,
                    post,
                })
            })
            .catch(() => { this.setState({ loading: false }); });
    };

    render() {
        const {loading, post} = this.state;

        return (
            <Fragment>
                <Post title={post.title} body={post.body} />
                {loading ? 'Loading' : ''}
            </Fragment>
        )
    }
}