import { createAction } from 'redux-actions';
import axios from 'axios';

export const loadStarted = createAction('[Comments] Loading started');
export const loadComplited = createAction('[Comments] Loading complited');
export const loadFailed = createAction('[Comments] Loading failed');

export const load = () => (dispatch, getState) => {
    const state = getState();
    dispatch(loadStarted());
    axios.get(`https://jsonplaceholder.typicode.com/comments?_page=${state.comments.page}&_limit=10`)
        .then((response) => response.data)
        .then((comments) => { dispatch(loadComplited(comments)) })
        .catch(() => { dispatch(loadFailed()) });
}