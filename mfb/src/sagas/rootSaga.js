import { fork, all } from "redux-saga/effects";
import authSaga from "./authSaga";
import userSaga from "./user";

function* rootSaga() {
  yield all([yield fork(authSaga), yield fork(userSaga)]);
}

export default rootSaga;
