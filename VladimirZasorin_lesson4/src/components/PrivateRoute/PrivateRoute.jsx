import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function PrivateRoute({ isLogin, component: Component, ...rest }) {
    return (
        <Route { ...rest } render={
            props => isLogin
                ? <Component { ...props } />
                : <Redirect to="/login" />
        } />
    );
}

PrivateRoute.propTypes = {
    isLogin: PropTypes.any.isRequired,
    component: PropTypes.any.isRequired,
    rest: PropTypes.any,
}