import {createAction} from 'redux-actions';

export const loadStarted = createAction('[Articles] Loading started');
export const loadCompleted = createAction('[Articles] Loading completed');
export const loadFailed = createAction('[Articles] Loading failed');

export const load = (dispatch) => {
  dispatch(loadStarted());
  fetch(`http://jsonplaceholder.typicode.com/posts`)
    .then((response) => response.json())
    .then((articles) => {
      dispatch(loadCompleted(articles));
    })
    .catch(() => {
      dispatch(loadFailed());
    });
};