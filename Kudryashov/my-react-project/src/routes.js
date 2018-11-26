import ContentHome from './components/ContentHome/ContentHome';
import BlogsContainer from './containers/BlogsContainer';
import NewsContainer from './containers/NewsContainer';
import BlogContainer from './containers/BlogContainer';
import NewContainer from './containers/NewContainer';
import ContentAbout from './components/ContentAbout/ContentAbout';

export default [
  {
    path: '/',
    exact: true,
    component: ContentHome,
  },
  {
    path: '/blogs',
    exact: true,
    component: BlogsContainer,
  },
  {
    path: '/news',
    exact: true,
    component: NewsContainer,
  },
  {
    path: '/about',
    exact: true,
    component: ContentAbout,
  },
  {
    path: '/blogs/:id',
    exact: true,
    component: BlogContainer,
  },
  {
    path: '/news/:id',
    exact: true,
    component: NewContainer,
  },
];
