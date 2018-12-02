import { createAction } from 'redux-actions';

export const loadStarted = createAction('[Posts] Loading started');
export const loadComplited = createAction('[Posts] Loading complited');
export const loadFailed = createAction('[Posts] Loading failed');

export const load = (dispatch) => {
    dispatch(loadStarted());
    fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then((response) => response.json())
        .then((posts) => { dispatch(loadComplited(posts)) })
        .catch(() => { dispatch(loadFailed()) });
}