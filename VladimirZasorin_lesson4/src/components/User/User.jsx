import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function User({ element, noRef }) {
    const link = noRef
        ? element.name
        : <Link to={ `users/${ element.id }` }>{ element.name }</Link>;
    return (
        <div className="media">
            <div className="media-body">
                <h5 className="mt-0">
                    { link }
                </h5>
                <p>Email: { element.email }</p>
                <p>Website: { element.website }</p>
            </div>
        </div>
    )
    
}

User.propTypes = {
    element: PropTypes.shape({
        name: PropTypes.string,
        email: PropTypes.string,
        website: PropTypes.string,
    }),
}