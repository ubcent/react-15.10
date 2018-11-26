import CommentsContainer from 'containers/CommentsContainer';
import Home from 'components/Home';
import UsersContainer from 'containers/UsersContainer';
import Article from 'components/Article';
import CommentContainer from 'containers/CommentContainer';
import UserWatch from 'containers/UserWatch';

export default [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/blog',
    exact: true,
    component: Article
  },
  {
    path: '/comments',
    exact: true,
    component: CommentsContainer
  },
  {
    path: '/comments/:id',
    exact: true,
    component: CommentContainer
  },
  {
    path: '/users',
    exact: true,
    component: UsersContainer
  },
  {
    path: '/users/:id',
    exact: true,
    component: UserWatch
  },
]