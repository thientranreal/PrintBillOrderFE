// src/sagas/index.js
import { takeEvery, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE } from '../actions/types';
import { fetchDataSuccess, fetchDataFailure } from '../actions';

function* fetchDataSaga() {
    try {
        const response = yield call(axios.get, 'https://jsonplaceholder.typicode.com/posts');
        yield put(fetchDataSuccess(response.data));
    } catch (error) {
        yield put(fetchDataFailure(error.message));
    }
}

function* watchFetchData() {
    yield takeEvery(FETCH_DATA_REQUEST, fetchDataSaga);
}

export default function* rootSaga() {
    yield watchFetchData();
}
