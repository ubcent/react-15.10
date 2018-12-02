import { combineReducers } from 'redux';

import commentsReducer from './comments';
import articlesReducer from './articles';
import usersReducer from './users';

export default combineReducers({
    comments: commentsReducer,
    posts: articlesReducer,
    users: usersReducer,
});