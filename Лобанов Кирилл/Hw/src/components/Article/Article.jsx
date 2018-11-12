import React, {Component, Fragment} from 'react';
import './Article.css'

import Comment from '../Comment';

export default class Article extends Component {
    constructor(props) {
        super(props);

        this.state = {
            comments: [],
        }
    }


    handleComment = (comment) => {
        this.setState((prevState) => ({
            ...prevState,
            comments: prevState.comments.concat([comment]),
        }))
    };

    render() {
        const {comments} = this.state;
        return (
            <div className="container-article">
                <article className="article">
                    <h2>Lorem ipsum dolor.</h2>
                    <p className="autor"> by <a href="#">Kirill Lobanov</a></p>
                    <p className="publish"> Posted on <span id="date-publish"> January 1, 2018 at 12:00 PM </span></p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores in ipsam minima placeat
                        ullam.
                        Accusantium architecto aut eius, eveniet fugiat hic maxime, mollitia numquam odio possimus,
                        quasi
                        recusandae reprehenderit sunt suscipit ut vel vero voluptatem? </p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores in ipsam minima placeat
                        ullam.
                        Accusantium architecto aut eius, eveniet fugiat hic maxime, mollitia numquam odio possimus,
                        quasi
                        recusandae reprehenderit sunt suscipit ut vel vero voluptatem? </p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores in ipsam minima placeat
                        ullam.
                        Accusantium architecto aut eius, eveniet fugiat hic maxime, mollitia numquam odio possimus,
                        quasi
                        recusandae reprehenderit sunt suscipit ut vel vero voluptatem? </p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores in ipsam minima placeat
                        ullam.
                        Accusantium architecto aut eius, eveniet fugiat hic maxime, mollitia numquam odio possimus,
                        quasi
                        recusandae reprehenderit sunt suscipit ut vel vero voluptatem? </p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores in ipsam minima placeat
                        ullam.
                        Accusantium architecto aut eius, eveniet fugiat hic maxime, mollitia numquam odio possimus,
                        quasi
                        recusandae reprehenderit sunt suscipit ut vel vero voluptatem? </p>
                    <hr/>
                </article>
                <Comment onSend={this.handleComment}/>
                <div className="comment-person">
                    {comments.map((comment, idx) => {
                        return <div key={idx}>
                            <h3>{comment.author}</h3>
                            <p> {comment.message} </p>
                        </div>
                    })}
                </div>
            </div>
        )
    }
}
