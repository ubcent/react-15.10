import React from 'react';
import PropTypes from 'prop-types';

export default function MessagesList({ messages }) {
    return (
        <div className="MessagesList">
            <ul>
                {messages.map((message) => <li key={message._id}>{message.author}({message.timestamp}): {message.text}</li>)}
            </ul>
        </div>
    )
}

MessagesList.propTypes = {
    messages: PropTypes.arrayOf(PropTypes.shape({
        _id: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        timestamp: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
    })),
}