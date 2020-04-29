import { takeLatest, all } from "redux-saga/effects";
import rates from "../api/rates";
import comments from "../api/comments";
import {
  GET_ALL_RATING,
  SAVE_GET_ALL_RATING,
  DELL_RATING,
  SAVE_DELL_RATING,
  GET_COMMENT_WITH_ID_RATE,
  SAVE_COMMENT_WITH_ID_RATE
} from "../actions/constants";
import { createRequestSaga } from "./common";
import { message } from "antd";

const getAllrate = createRequestSaga({
  request: rates.getAllrates,
  key: "getAllrates",
  success: [
    res => ({
      type: SAVE_GET_ALL_RATING,
      payload: res
    })
  ],
  functionFailure: [res => message.error(res.message)]
});

const dellRate = createRequestSaga({
  request: rates.deleterates,
  key: "deleterates",
  success: [
    res => ({
      type: SAVE_DELL_RATING,
      payload: res
    })
  ],
  failure: [],
  functionFailure: [res => message.error(res)],
  functionSuccess: [() => message.success("Xóa thành công")]
});

const actGetCommentWithIdRate = createRequestSaga({
  request: comments.getAllComments,
  key: "getRateWithID",
  success: [
    res => ({
      type: SAVE_COMMENT_WITH_ID_RATE,
      payload: res
    })
  ],
  functionFailure: [res => message.error(res.message)]
});

export default [
  function* fetchWatcher() {
    yield all([
      takeLatest(GET_ALL_RATING, getAllrate),
      takeLatest(DELL_RATING, dellRate),
      takeLatest(GET_COMMENT_WITH_ID_RATE, actGetCommentWithIdRate)
    ]);
  }
];
