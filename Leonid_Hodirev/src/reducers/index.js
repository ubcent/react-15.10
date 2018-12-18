import { combineReducers } from 'redux';
import postsReducer from './posts';
import messagesReducer from './messages';

export default combineReducers({
    posts: postsReducer,
    messages: messagesReducer,
});