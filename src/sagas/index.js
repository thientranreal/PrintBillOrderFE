// src/sagas/index.js
import { all } from "redux-saga/effects";
import watchLogin from "./loginSaga";
import watchLogout from "./logoutSaga";
import watchRegister from "./registerSaga";
import watchProfile from "./profileSaga";
import watchActivateWS from "./activateWSSaga";

export default function* rootSaga() {
  yield all([
    watchLogin(),
    watchLogout(),
    watchRegister(),
    watchProfile(),
    watchActivateWS(),
  ]);
}
