// src/reducers/dataReducer.js
import {
  FETCH_DATA_LOGIN_REQUEST,
  FETCH_DATA_LOGIN_SUCCESS,
  FETCH_DATA_LOGIN_FAILURE,
  FETCH_DATA_LOGOUT_REQUEST,
  FETCH_DATA_LOGOUT_SUCCESS,
  FETCH_DATA_LOGOUT_FAILURE,
  FETCH_DATA_PROFILE_SUCCESS,
  FETCH_DATA_PROFILE_REQUEST,
  FETCH_DATA_PROFILE_FAILURE,
  FETCH_DATA_REGISTER_SUCCESS,
  FETCH_DATA_REGISTER_FAILURE,
  FETCH_DATA_REGISTER_REQUEST,
  SHOW_LOADING,
  HIDE_LOADING
} from "../actions/types";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    // fetch login................
    case SHOW_LOADING:
      return { ...state, loading: true };
    case HIDE_LOADING:
      return { ...state, loading: false };
    case FETCH_DATA_LOGIN_REQUEST:
    case FETCH_DATA_LOGOUT_REQUEST:
    case FETCH_DATA_PROFILE_REQUEST:
    case FETCH_DATA_REGISTER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_DATA_LOGIN_SUCCESS:
    case FETCH_DATA_LOGOUT_SUCCESS:
    case FETCH_DATA_PROFILE_SUCCESS:
    case FETCH_DATA_REGISTER_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case FETCH_DATA_LOGIN_FAILURE:
    case FETCH_DATA_LOGOUT_FAILURE:
    case FETCH_DATA_PROFILE_FAILURE:
    case FETCH_DATA_REGISTER_FAILURE:
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
