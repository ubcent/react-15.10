import React, {Component} from 'react';
import './Comment.css'

export default class Comment extends Component {
    constructor(props) {
        super(props);

        this.state = {
            author: '',
            message: '',
        }
    }


    handleComment = (e) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleClick = () => {
        const { onSend } = this.props;
        this.setState({
            message: '',
            author: '',
        });
        onSend(this.state);
    };

    render() {
        const {author, message} = this.state;
        return (
            <div className="comment">
                <h5 className="comment-head"> Leave a Comment:</h5>
                <form className="form-padding" action="#">
                    <div>
                        <input onChange={this.handleComment} value={author} name="author" className="form-control"
                               type="text" placeholder="Name"/>
                    </div>
                    <div>
                        <textarea onChange={this.handleComment} value={message} name="message" className="form-control"
                                  rows="5" placeholder="Message..."/>
                    </div>
                    <button onClick={this.handleClick} className="btn btn-primary form-button">Send</button>
                </form>
            </div>
        )
    }
}