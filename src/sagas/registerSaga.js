import { call, put, takeEvery } from "redux-saga/effects";
import { registerFailure, registerSuccess } from "../actions";
import axiosInstance from "../api/axiosInstance";
import { toast } from "react-toastify";
import { history } from "../history";
import { FETCH_DATA_REGISTER_REQUEST } from "../actions/types";

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
      console.log("data", response.data);
      toast.error(response.data.message); // Show error toast
    } else {
      console.log("sres", response.data);
      yield put(registerSuccess(response.data));
      toast.success(response.data.message);

      history.push("/dashboard");
    }
  } catch (error) {
    console.log(error);
    yield put(registerFailure(error.message));
    toast.error(error.message); // Show error toast
  }
}

function* watchRegister() {
  yield takeEvery(FETCH_DATA_REGISTER_REQUEST, registerSaga);
}

export default watchRegister;
