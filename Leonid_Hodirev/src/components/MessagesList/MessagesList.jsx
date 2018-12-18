import React, {Component, Fragment} from 'react';
import {Media} from 'reactstrap';

export default class MessagesList extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        const {messages} = this.props;
        return (
            <Fragment>
                {messages.map((message) =>
                    <Media key={message._id}>
                        <Media body>
                            <Media heading>
                                {message.text}
                            </Media>
                            {message.author} ({message.timestamp})
                        </Media>
                    </Media>
                )}
            </Fragment>
        )
    }
}