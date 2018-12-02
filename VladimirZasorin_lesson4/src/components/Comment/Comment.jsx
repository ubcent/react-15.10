import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Comment({ element }) {
    return (
        <div className="media">
            <div className="media-body">
                <h5 className="mt-0"><Link to={ `posts/${ element.postId }` }>{ element.name }</Link></h5>
                <p><Link to={ `users/${ element.id }` }>Name: { element.id }</Link></p>
                <p>Email: { element.email }</p>
                <p>Message: { element.body }</p>
            </div>
        </div>
    )
    
}

Comment.propTypes = {
    element: PropTypes.shape({
        postId: PropTypes.number.isRequired,
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
        email: PropTypes.string,
    }),
}