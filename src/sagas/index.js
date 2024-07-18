// src/sagas/index.js
import { takeEvery, call, put, takeLatest } from 'redux-saga/effects';
import { FETCH_DATA_LOGIN_REQUEST, FETCH_DATA_LOGOUT_REQUEST } from '../actions/types';
import { fetchLoginSuccess, fetchLoginFailure, logoutSuccess, logoutFailure } from '../actions';
import axiosInstance from '../api/axiosInstance';
import { toast } from 'react-toastify';
import history from '../history';


function* fechLoginSaga(action) {
    try {
        const response = yield call(axiosInstance.post, '/users/login', action.payload);
        // Show success toast
        if (response.status !== 200) {
            toast.error(response.data.message);  // Show error toast
        } else {
            yield put(fetchLoginSuccess(response.data));
            localStorage.setItem('token', response.data.data[0].token);
            toast.success(response.data.message);
            window.parent.location.href = '/dashboard'
        }

    } catch (error) {
        yield put(fetchLoginFailure(error.message));
        toast.error('Login failed: ' + error.message);  // Show error toast


    }
}
function* logoutSaga() {
    try {
        // Perform the logout API call
        yield call(axiosInstance.get, '/users/logout');
        localStorage.removeItem('token');
        // Dispatch success action
        yield put(logoutSuccess());

        // Redirect to the login page
        window.parent.location.href = '/login'
    } catch (error) {
        // Dispatch failure action
        yield put(logoutFailure(error.message));
    }
}

function* watchFetchData() {
    // watch login
    yield takeEvery(FETCH_DATA_LOGIN_REQUEST, fechLoginSaga);
    yield takeLatest(FETCH_DATA_LOGOUT_REQUEST, logoutSaga);

}

export default function* rootSaga() {
    yield watchFetchData();
}
