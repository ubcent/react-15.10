import { createAction } from 'redux-actions';

export const loadStarted = createAction('[Comments] Loading started');
export const loadComplited = createAction('[Comments] Loading complited');
export const loadFailed = createAction('[Comments] Loading failed');

export const load = (dispatch) => {
    dispatch(loadStarted());
    fetch(`https://jsonplaceholder.typicode.com/comments`)
        .then((response) => response.json())
        .then((comments) => { dispatch(loadComplited(comments)) })
        .catch(() => { dispatch(loadFailed()) });
}