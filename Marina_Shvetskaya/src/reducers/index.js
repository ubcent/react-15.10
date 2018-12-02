import { combineReducers } from "redux";
import commentsReducer from './comments'
import topPostsReducer from './topPosts'

export default combineReducers({
  comments: commentsReducer,
  posts: topPostsReducer,
})