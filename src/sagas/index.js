// src/sagas/index.js
import { takeEvery, call, put, takeLatest } from "redux-saga/effects";
import {
  FETCH_DATA_LOGIN_REQUEST,
  FETCH_DATA_LOGOUT_REQUEST,
  FETCH_DATA_PROFILE_REQUEST,
  FETCH_DATA_REGISTER_REQUEST,
} from "../actions/types";
import {
  fetchLoginSuccess,
  fetchLoginFailure,
  logoutSuccess,
  logoutFailure,
  fectProfileSuccess,
  registerFailure,
  registerSuccess,
} from "../actions";
import axiosInstance from "../api/axiosInstance";
import { toast } from "react-toastify";
import { history } from "../history";

import { all } from "redux-saga/effects";

// hàm này lấy api
function* fechLoginSaga(action) {
  try {
    const response = yield call(
      axiosInstance.post,
      "/users/login",
      action.payload
    );
    // Show success toast
    if (response.status !== 200) {
      yield put(fetchLoginFailure(response.data.message));
      toast.error(response.data.message); // Show error toast
    } else {
      yield put(fetchLoginSuccess(response.data));
      localStorage.setItem("token", response.data.data[0].token);
      toast.success(response.data.message);
      history.push("/dashboard");
    }
  } catch (error) {
    yield put(fetchLoginFailure(error.message));
    toast.error(error.message); // Show error toast
  }
}
// hàm lấy api
function* logoutSaga() {
  try {
    // Perform the logout API call
    yield call(axiosInstance.get, "/users/logout");
    localStorage.removeItem("token");
    // Dispatch success action
    yield put(logoutSuccess());

    // Redirect to the login page
    history.push("/login");
  } catch (error) {
    // Dispatch failure action
    yield put(logoutFailure(error.message));
  }
}
// hàm api
function* fetchProfileSaga() {
  try {
    const response = yield call(axiosInstance.get, "/users/profile", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    // console.log('responose', response);
    // Show success toast
    if (response.status !== 200) {
      toast.error(response.data.message); // Show error toast
    } else {
      yield put(fectProfileSuccess(response.data));
      // toast.success(response.data.message);
    }
  } catch (error) {
    yield put(fetchLoginFailure(error.message));
  }
}

function* registerSaga(action) {
  try {
    const response = yield call(
      axiosInstance.post,
      "/users/register",
      action.payload
    );
    // Show success toast
    if (response.status !== 200) {
      yield put(registerFailure(response.data.message));
      toast.error(response.data.message); // Show error toast
    } else {
      yield put(registerSuccess(response.data));
      toast.success(response.data.message);

      history.push("/dashboard");
    }
  } catch (error) {
    yield put(registerFailure(error.message));
    toast.error(error.message); // Show error toast
  }
}

function* watchFetchData() {
  // watch login
  yield takeEvery(FETCH_DATA_LOGIN_REQUEST, fechLoginSaga);
  // watch register
  yield takeEvery(FETCH_DATA_REGISTER_REQUEST, registerSaga);
  // watch logout
  yield takeLatest(FETCH_DATA_LOGOUT_REQUEST, logoutSaga);
  // watch fetch profile
  yield takeLatest(FETCH_DATA_PROFILE_REQUEST, fetchProfileSaga);
}

export default function* rootSaga() {
  yield all([watchFetchData()]);
}
