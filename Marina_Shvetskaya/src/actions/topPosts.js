import {createAction} from 'redux-actions';

export const loadStarted = createAction('[TopPosts] Loading started');
export const loadCompleted = createAction('[TopPosts] Loading completed');
export const loadFailed = createAction('[TopPosts] Loading failed');

export const loadTopPostsAction = (dispatch) => {

  dispatch(loadStarted());
  fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then((response) => response.json())
    .then((posts) => {
      dispatch(loadCompleted(posts));
    })
    .catch(() => {
      dispatch(loadFailed())
    });
};