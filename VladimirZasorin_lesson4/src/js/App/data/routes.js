import ArticleList from '../ArticleList';
import ArticlePage from '../ArticlePage';
import CommentList from '../CommentList';
import UserList from '../UserList';
import UserPage from '../UserPage';
import Login from '../Login';

export default [
    {
        path: '/',
        exact: true,
        component: Login
    },
    {
        path: '/articles',
        exact: true,
        component: ArticleList
    },
    {
        path: '/articles/:id',
        exact: true,
        component: ArticlePage
    },
    {
        path: '/comments',
        exact: true,
        component: CommentList
    },
    {
        path: '/users',
        exact: true,
        component: UserList
    },
    {
        path: '/users/:id',
        exact: true,
        component: UserPage
    },
];