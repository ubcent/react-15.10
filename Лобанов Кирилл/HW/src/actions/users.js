import {createAction} from 'redux-actions';

export const loadStarted = createAction('[Users] Loading started');
export const loadCompleted = createAction('[Users] Loading completed');
export const loadFailed = createAction('[Users] Loading failed');

export const load = (dispatch) => {
  dispatch(loadStarted());
  fetch(`http://jsonplaceholder.typicode.com/users`)
    .then((response) => response.json())
    .then((users) => {
      dispatch(loadCompleted(users));
    })
    .catch(() => {
      dispatch(loadFailed());
    });
};