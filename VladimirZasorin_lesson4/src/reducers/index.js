import { combineReducers } from 'redux';

import comments from './comments';
import messages from './messages';
import posts from './articles';
import users from './users';

export default combineReducers({ comments, posts, users, messages });