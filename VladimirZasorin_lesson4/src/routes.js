import React from 'react';

import Login from 'components/Login';
import NotFound from 'components/NotFound';
import ElementContainer from 'containers/ElementContainer';
import ArticlesContainer from 'containers/ArticlesContainer';
import CommentsContainer from 'containers/CommentsContainer';
import UsersContainer from 'containers/UsersContainer';

export default [
    {
        path: '/',
        exact: true,
        render: props => <Login { ...props } onLogin={ ({ email, password }) => alert(`${email} ${password}`) } />
    },
    {
        path: '/posts',
        exact: true,
        component: ArticlesContainer
    },
    {
        path: '/comments',
        exact: true,
        component: CommentsContainer
    },
    {
        path: '/users',
        exact: true,
        component: UsersContainer
    },
    {
        path: '/users/:id',
        exact: true,
        component: ElementContainer
    },
    {
        path: '/posts/:id',
        exact: true,
        component: ElementContainer
    },
    {
        component: NotFound
    },
];