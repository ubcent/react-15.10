import { createAction } from 'redux-actions';

export const loadStarted = createAction('[Users] Loading started');
export const loadComplited = createAction('[Users] Loading complited');
export const loadFailed = createAction('[Users] Loading failed');

export const load = (dispatch) => {
    dispatch(loadStarted());
    fetch(`https://jsonplaceholder.typicode.com/users`)
        .then((response) => response.json())
        .then((users) => { dispatch(loadComplited(users)) })
        .catch(() => { dispatch(loadFailed()) });
}