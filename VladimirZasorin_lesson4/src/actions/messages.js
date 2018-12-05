import { createAction } from 'redux-actions';
import io from 'socket.io-client';
import axios from 'axios';

export const messageReceived = createAction('[Message] Received');
export const messagesLoadStart = createAction('[Message] Load start');
export const messagesLoadComplete = createAction('[Message] Load complete');
export const messagesLoadFailed = createAction('[Message] Load failed');

const socket = io('http://localhost:3000');

export const send = (message) => {
    socket.emit('user message', message);
}

export const listen = () => (dispatch) => {
    socket.on('server message', (message) => {
        dispatch(messageReceived(message))
    });
}

export const load = () => (dispatch) => {
    dispatch(messagesLoadStart());
    axios.get(`http://localhost:3000/messages`)
        .then((response) => response.data)
        .then((messages) => { dispatch(messagesLoadComplete(messages)) })
        .catch(() => { dispatch(messagesLoadFailed()) });
}