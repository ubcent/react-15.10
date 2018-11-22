import React, {Component, Fragment} from 'react';

import PostsList from 'components/PostsList';

export default class PostsContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            posts: [],
            limit: 3,
            page: 1
        }
    }

    loadPosts = () => {
        const {page, limit} = this.state;
        this.setState({loading: true});
        fetch(`http://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`)
            .then((response) => response.json())
            .then((posts) => {
                this.setState((prevState) => ({
                    ...prevState,
                    loading: false,
                    posts: this.state.posts.concat(posts),
                    page: prevState.page + 1
                }))
            })
            .catch(() => {
                this.setState({loading: false});
            });
    };

    handleClick = (e) => {
        e.preventDefault();

        this.loadPosts();
    };

    // handleScroll = () => {
    //     if (document.documentElement.clientHeight - window.scrollY - window.innerHeight === 0) {
    //         if (!this.state.loading) {
    //             this.loadPosts();
    //         }
    //     }
    // };

    componentDidMount() {
        this.loadPosts();
        // window.addEventListener('scroll', this.handleScroll);
    };


    componentWillUnmount() {
        // window.removeEventListener('scroll', this.handleScroll);
    };

    render() {
        const {loading, posts} = this.state;

        return (
            <Fragment>
                <PostsList posts={posts}/>
                {loading ? 'Loading' : ''}
                <ul className="pagination justify-content-center mb-4">
                    <li className="page-item">
                        <a onClick={this.handleClick} className="page-link" href="#">Newer →</a>
                    </li>
                </ul>
            </Fragment>
        )
    }
}