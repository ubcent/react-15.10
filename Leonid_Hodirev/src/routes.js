import PostContainer from 'containers/PostContainer';
import PostsContainer from 'containers/PostsContainer';
import MessagesContainer from 'containers/MessagesContainer';

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
    },
    {
        path: '/messages',
        exact: true,
        component: MessagesContainer,
    }
];