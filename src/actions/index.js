// src/actions/index.js
import {
  FETCH_DATA_LOGIN_REQUEST,
  FETCH_DATA_LOGIN_SUCCESS,
  FETCH_DATA_LOGIN_FAILURE,
  FETCH_DATA_LOGOUT_REQUEST,
  FETCH_DATA_LOGOUT_SUCCESS,
  FETCH_DATA_LOGOUT_FAILURE,
  FETCH_DATA_PROFILE_REQUEST,
  FETCH_DATA_PROFILE_SUCCESS,
  FETCH_DATA_PROFILE_FAILURE,
  FETCH_DATA_REGISTER_SUCCESS,
  FETCH_DATA_REGISTER_FAILURE,
  FETCH_DATA_REGISTER_REQUEST,
  SHOW_LOADING,
  HIDE_LOADING,
  ACTIVATE_WS,
} from "./types";

// BUILD ACTION LOGIN SAGA
export const loginRequest = (credentials) => ({
  type: FETCH_DATA_LOGIN_REQUEST,
  payload: credentials,
});
export const loginSuccess = (data) => ({
  type: FETCH_DATA_LOGIN_SUCCESS,
  payload: data,
});
export const loginFailure = (error) => ({
  type: FETCH_DATA_LOGIN_FAILURE,
  payload: error,
});

// LOGOUT SAGA
export const logoutRequest = () => ({
  type: FETCH_DATA_LOGOUT_REQUEST,
});
export const logoutSuccess = () => ({
  type: FETCH_DATA_LOGOUT_SUCCESS,
});
export const logoutFailure = (error) => ({
  type: FETCH_DATA_LOGOUT_FAILURE,
  payload: error,
});

// REGISTER SAGA
export const registerRequest = (info) => ({
  type: FETCH_DATA_REGISTER_REQUEST,
  payload: info,
});
export const registerSuccess = () => ({
  type: FETCH_DATA_REGISTER_SUCCESS,
});
export const registerFailure = (error) => ({
  type: FETCH_DATA_REGISTER_FAILURE,
  payload: error,
});

// FETCH PROFILE
export const profileRequest = () => ({
  type: FETCH_DATA_PROFILE_REQUEST,
});
export const profileSuccess = (data) => ({
  type: FETCH_DATA_PROFILE_SUCCESS,
  payload: data,
});
export const profileFailure = (error) => ({
  type: FETCH_DATA_PROFILE_FAILURE,
  payload: error,
});

// LOADING
export const showLoading = () => ({ type: SHOW_LOADING });
export const hideLoading = () => ({ type: HIDE_LOADING });

// ACTIVATE WS
export const activateWS = () => ({ type: ACTIVATE_WS });
