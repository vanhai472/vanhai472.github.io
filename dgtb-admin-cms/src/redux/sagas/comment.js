import { takeLatest, all } from "redux-saga/effects";
import comments from "../api/comments";
import {
  GET_ALL_COMMENT,
  SAVE_GET_ALL_COMMENT,
  DELL_COMMENT,
  SAVE_DELL_COMMENT
} from "../actions/constants";

import { createRequestSaga } from "./common";

import { message } from "antd";
// Lấy dữ liệu comments
const getAllComment = createRequestSaga({
  request: comments.getAllComments,
  key: "getAllComment",
  success: [
    res => ({
      type: SAVE_GET_ALL_COMMENT,
      payload: res
    })
  ],
  functionFailure: [res => message.error(res.message)]
});
// Xoá comments
const dellComment = createRequestSaga({
  request: comments.deletecomments,
  key: "dellCommnet",
  success: [
    res => ({
      type: SAVE_DELL_COMMENT,
      payload: res
    })
  ],
  failure: [],
  functionFailure: [res => message.error(res)],
  functionSuccess: [() => message.success("Xóa thành công")]
});
export default [
  function* fetchWatcher() {
    yield all([
      takeLatest(GET_ALL_COMMENT, getAllComment),
      takeLatest(DELL_COMMENT, dellComment)
    ]);
  }
];
