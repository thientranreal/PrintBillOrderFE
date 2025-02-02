import { call, put, takeLatest } from "redux-saga/effects";
import axiosInstance from "../api/axiosInstance";
import {
  loginFailure,
  loginSuccess,
  showLoading,
  hideLoading,
} from "../actions";
import { toast } from "react-toastify";
import { FETCH_DATA_LOGIN_REQUEST } from "../actions/types";
import { history } from "../history";

function* loginSaga(action) {
  try {
    const response = yield call(
      axiosInstance.post,
      "/users/login",
      action.payload
    );
    // Show success toast
    if (response.status !== 200) {
      yield put(loginFailure(response.data.message));
      toast.error(response.data.message); // Show error toast
    } else {
      yield put(showLoading());

      yield put(loginSuccess(response.data));
      localStorage.setItem("token", response.data.data[0].token);

      // Hide loading component
      yield put(hideLoading());
      history.push("/dashboard");
      toast.success(response.data.message);
    }
  } catch (error) {
    yield put(loginFailure(error.message));
    toast.error(error.message); // Show error toast
  }
}

function* watchLogin() {
  yield takeLatest(FETCH_DATA_LOGIN_REQUEST, loginSaga);
}

export default watchLogin;
