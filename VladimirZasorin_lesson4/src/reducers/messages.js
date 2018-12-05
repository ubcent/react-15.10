import { handleActions } from 'redux-actions';
import { messageReceived, messagesLoadStart, messagesLoadComplete, messagesLoadFailed } from 'actions/messages';

const initialState = {
    entities: [],
};

export default handleActions({
    [messageReceived]: (state, action) => {
        return {
            ...state,
            entities: state.entities.concat(action.payload),
        };
    },
    [messagesLoadStart]: (state) => {
        return {
            ...state,
        };
    },
    [messagesLoadComplete]: (state, action) => {
        return {
            ...state,
            entities: state.entities.concat(action.payload),
        };
    },
    [messagesLoadFailed]: (state) => {
        return {
            ...state,
        };
    }
}, initialState);