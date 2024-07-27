import { call, put, takeLatest } from "redux-saga/effects";
import axiosInstance from "../api/axiosInstance";
import { toast } from "react-toastify";
import {
  FETCH_DATA_PROFILE_REQUEST,
  UPDATE_PROFILE_REQUEST,
} from "../actions/types";
import {
  profileFailure,
  profileSuccess,
  profileRequest,
  updateProfileFailure,
  updateProfileSuccess,
} from "../actions";

function* profileSaga() {
  try {
    const response = yield call(axiosInstance.get, "/users/profile", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    // console.log('responose', response);
    // Show success toast
    if (response.status !== 200) {
      yield put(profileFailure(response.data.message));
      toast.error(response.data.message); // Show error toast
    } else {
      yield put(profileSuccess(response.data));
      // toast.success(response.data.message);
    }
  } catch (error) {
    yield put(profileFailure(error.message));
    toast.error(error.message); // Show error toast
  }
}

function* updateProfileSaga(action) {
  try {
    const response = yield call(
      axiosInstance.put,
      "/users/profile",
      action.payload,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    // Show success toast
    if (response.status !== 200) {
      yield put(updateProfileFailure(response.data.message));
      toast.error(response.data.message); // Show error toast
    } else {
      console.log(response.data);
      yield put(updateProfileSuccess(response.data));
      yield put(profileRequest())
      toast.success(response.data.message);
    }
  } catch (error) {
    yield put(updateProfileFailure(error.message));
    toast.error(error.message); // Show error toast
  }
}

function* watchProfile() {
  yield takeLatest(FETCH_DATA_PROFILE_REQUEST, profileSaga);
  yield takeLatest(UPDATE_PROFILE_REQUEST, updateProfileSaga);
}

export default watchProfile;
