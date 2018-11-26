import Home from 'components/Home';

import CommentsContainer from 'containers/CommentsContainer';
import CommentContainer from 'containers/CommentContainer';
import UsersContainer from 'containers/UsersContainer';
import UserWatch from 'containers/UserWatch';
import ArticlesContainer from 'containers/ArticlesContainer';
import  ArticleContainer from 'containers/ArticleContainer';

export default [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/blog',
    exact: true,
    component: ArticlesContainer
  },
  {
    path: '/blog/:id',
    exact: true,
    component: ArticleContainer
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