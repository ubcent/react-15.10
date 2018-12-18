import { combineReducers } from 'redux';
import commentsReducers from './comments';
import articlesReducers from './articles';
import usersReducers from './users';

export default combineReducers({
  comments: commentsReducers,
  articles: articlesReducers,
  users: usersReducers,
})