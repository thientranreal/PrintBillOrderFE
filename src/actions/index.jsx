// src/actions/index.js
import { FETCH_DATA_LOGIN_REQUEST, FETCH_DATA_LOGIN_SUCCESS, FETCH_DATA_LOGIN_FAILURE } from './types';



// BUILD ACTION LOGIN SAGA 
export const fetchLoginRequest = (credentials) => ({
    type: FETCH_DATA_LOGIN_REQUEST,
    payload: credentials
})

export const fetchLoginSuccess = (data) => ({
    type: FETCH_DATA_LOGIN_SUCCESS,
    payload: data
})
export const fetchLoginFailure = (error) => ({
    type: FETCH_DATA_LOGIN_FAILURE,
    payload: error
})

