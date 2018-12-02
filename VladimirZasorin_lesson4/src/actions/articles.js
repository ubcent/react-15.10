import { createAction } from 'redux-actions';
import axios from 'axios';

export const loadStarted = createAction('[Posts] Loading started');
export const loadComplited = createAction('[Posts] Loading complited');
export const loadFailed = createAction('[Posts] Loading failed');

export const load = (dispatch) => {
    dispatch(loadStarted());
    axios.get(`https://jsonplaceholder.typicode.com/posts`)
        .then((response) => response.data)
        .then((posts) => { dispatch(loadComplited(posts)) })
        .catch(() => { dispatch(loadFailed()) });
}