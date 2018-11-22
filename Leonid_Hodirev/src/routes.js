import PostContainer from 'containers/PostContainer';
import PostsContainer from 'containers/PostsContainer';

export default [
    {
        path: '/',
        exact: true,
        component: PostsContainer,
    },
    {
        path: '/post/:id',
        exact: true,
        component: PostContainer,
    }
];