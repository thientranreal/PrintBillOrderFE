import { call, put, takeLatest } from "redux-saga/effects";
import axiosInstance from "../api/axiosInstance";
import { FETCH_DATA_LOGOUT_REQUEST } from "../actions/types";
import { logoutFailure, logoutSuccess } from "../actions";
import { history } from "../history";

function* logoutSaga() {
  try {
    // Perform the logout API call
    yield call(axiosInstance.get, "/users/logout");
    localStorage.removeItem("token");
    // Dispatch success action
    yield put(logoutSuccess([]));

    // Redirect to the login page
    history.push("/login");
  } catch (error) {
    // Dispatch failure action
    yield put(logoutFailure(error.message));
  }
}

function* watchLogout() {
  yield takeLatest(FETCH_DATA_LOGOUT_REQUEST, logoutSaga);
}

export default watchLogout;
