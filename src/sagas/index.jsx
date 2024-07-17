// src/sagas/index.js
import { takeEvery, call, put } from 'redux-saga/effects';
import { FETCH_DATA_LOGIN_REQUEST } from '../actions/types';
import { fetchLoginSuccess, fetchLoginFailure } from '../actions';
import axiosInstance from '../api/axiosInstance';
import { toast } from 'react-toastify';


function* fechLoginSaga(action) {
    try {
        const response = yield call(axiosInstance.post, '/users/login', action.payload);
        // Show success toast
        if (response.status !== 200) {
            toast.error(response.data.message);  // Show error toast
        } else {
            yield put(fetchLoginSuccess(response.data));
            toast.success(response.data.message);
        }

    } catch (error) {
        yield put(fetchLoginFailure(error.message));
        toast.error('Login failed: ' + error.message);  // Show error toast


    }
}

function* watchFetchData() {
    // watch login
    yield takeEvery(FETCH_DATA_LOGIN_REQUEST, fechLoginSaga);
}

export default function* rootSaga() {
    yield watchFetchData();
}
