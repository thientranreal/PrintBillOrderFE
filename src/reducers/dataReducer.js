// src/reducers/dataReducer.js
import { FETCH_DATA_LOGIN_REQUEST, FETCH_DATA_LOGIN_SUCCESS, FETCH_DATA_LOGIN_FAILURE } from '../actions/types';

const initialState = {
    loading: false,
    data: [],
    error: '',
};

const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        // fetch login................
        case FETCH_DATA_LOGIN_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case FETCH_DATA_LOGIN_SUCCESS:
            return {
                loading: false,
                data: action.payload,
                error: '',
            };
        case FETCH_DATA_LOGIN_FAILURE:
            return {
                loading: false,
                data: [],
                error: action.payload,
            };
        default:
            return state;
    }
};

export default dataReducer;
