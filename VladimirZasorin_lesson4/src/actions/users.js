import { createAction } from 'redux-actions';
import axios from 'axios';

export const loadStarted = createAction('[Users] Loading started');
export const loadComplited = createAction('[Users] Loading complited');
export const loadFailed = createAction('[Users] Loading failed');

export const load = (dispatch) => {
    dispatch(loadStarted());
    axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then((response) => response.data)
        .then((users) => { dispatch(loadComplited(users)) })
        .catch(() => { dispatch(loadFailed()) });
}