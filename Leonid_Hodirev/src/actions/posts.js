import { createAction } from 'redux-actions';

export const loadStarted = createAction('[Posts] Loading started');
export const loadCompleted = createAction('[Posts] Loading completed');
export const loadFailed = createAction('[Posts] Loading failed');

export const load = (dispatch) => {
    dispatch(loadStarted());
    fetch(`http://jsonplaceholder.typicode.com/posts`)
        .then((response) => response.json())
        .then((posts) => {
            dispatch(loadCompleted(posts));
        })
        .catch(() => { dispatch(loadFailed()); });
};