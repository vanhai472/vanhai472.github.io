import { takeLatest, all } from "redux-saga/effects";

import rates from "../api/rates";

import { createRequestSaga } from "./common";

import {
  GET_ALL_RATE_OPTION,
  SAVE_ALL_RATE_OPTION,
} from "../actions/constants";

const getAllRateOption = createRequestSaga({
  request: rates.getAllRateOption,
  key: "getAllRateOption",
  success: [(res) => ({ type: SAVE_ALL_RATE_OPTION, payload: res.data })],
});

export default [
  function* fetchWatcher() {
    yield all([takeLatest(GET_ALL_RATE_OPTION, getAllRateOption)]);
  },
];
