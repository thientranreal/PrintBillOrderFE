import { call, takeLatest } from "redux-saga/effects";
import { ACTIVATE_WS } from "../actions/types";
import axiosInstance from "../api/axiosInstance";
import { toast } from "react-toastify";

function* activateWSSaga() {
  try {
    const response = yield call(axiosInstance.get, "/users/tiktokLive");

    if (response.status !== 200) {
      toast.error(response.data.message);
    }
  } catch (error) {
    toast.error(error.message);
  }
}

function* watchActivateWS() {
  yield takeLatest(ACTIVATE_WS, activateWSSaga);
}

export default watchActivateWS;
