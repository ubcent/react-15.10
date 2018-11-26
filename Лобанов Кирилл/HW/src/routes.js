import CommentsContainer from 'containers/CommentsContainer';
import Home from 'components/Home';
import ArticlesContainer from 'containers/ArticlesContainer';
import UsersContainer from 'containers/UsersContainer';
import Article from 'components/Article';

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
    path: '/users',
    exact: true,
    component: UsersContainer
  },
]