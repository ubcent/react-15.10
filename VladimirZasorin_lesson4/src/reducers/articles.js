import { handleActions } from 'redux-actions';

import { loadStarted, loadComplited, loadFailed } from 'actions/articles';

const initialState = {
    entities: [],
    loading: false,
};

export default handleActions({
    [loadStarted]: (state) => {
        return {
            ...state,
            loading: true,
        };
    },
    [loadComplited]: (state, action) => {
        return {
            ...state,
            entities: state.entities.concat(action.payload),
            loading: false,
        };
    },
    [loadFailed]: (state) => {
        return {
            ...state,
            loading: false,
        };
    }
}, initialState);