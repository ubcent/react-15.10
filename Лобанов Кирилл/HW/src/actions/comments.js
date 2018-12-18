import {createAction} from 'redux-actions';

export const loadStarted = createAction('[Comments] Loading started');
export const loadCompleted = createAction('[Comments] Loading completed');
export const loadFailed = createAction('[Comments] Loading failed');

export const load = (dispatch) => {
  dispatch(loadStarted());
  fetch(`http://jsonplaceholder.typicode.com/comments`)
    .then((response) => response.json())
    .then((comments) => {
      dispatch(loadCompleted(comments));
    })
    .catch(() => {
      dispatch(loadFailed());
    });
};