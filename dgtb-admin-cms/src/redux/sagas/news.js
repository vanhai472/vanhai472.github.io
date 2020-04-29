import { takeLatest, all } from "redux-saga/effects";
import news from "../api/news";

import {
  GET_ALL_NEW,
  SAVE_GET_ALL_NEW,
  CREATE_SINGLE_NEW,
  DELL_NEW,
  UPDATE_SINGLE_NEW,
  SAVE_DELL_NEW,
  SAVE_NEW_WITH_ID,
  GET_NEW_WITH_ID,
  UPLOAD_IMAGE_NEW,
  SAVE_UPLOAD_IMAGE_NEW,
  CONFIRM_UPLOAD_IMAGE_BANNER_NEW
} from "../actions/constants";

import { createRequestSaga } from "./common";

import { message } from "antd";

const getAllNew = createRequestSaga({
  request: news.getAllNew,
  key: "getAllNew",
  success: [
    res => ({
      type: SAVE_GET_ALL_NEW,
      payload: res
    })
  ],
  functionFailure: [res => message.error(res.message)]
});

const dellNew = createRequestSaga({
  request: news.deleteNew,
  key: "dellNew",
  success: [
    res => ({
      type: SAVE_DELL_NEW,
      payload: res
    })
  ],
  failure: [],
  functionFailure: [res => message.error(res)],
  functionSuccess: [() => message.success("Xóa thành công")]
});

const createSingleNew = createRequestSaga({
  request: news.createNew,
  key: "createNew",
  failure: [],
  functionSuccess: [() => message.success("Tạo mới thành công")],
  functionFailure: [res => message.error(res.message)]
});

const updateSingleNew = createRequestSaga({
  request: news.updateNew,
  key: "createNew",
  failure: [],
  functionSuccess: [() => message.success("Cập nhật thành công")],
  functionFailure: [res => message.error(res.message)]
});
const getNewWithId = createRequestSaga({
  request: news.getNewWithID,
  key: "getNewWithID",
  success: [
    res => ({
      type: SAVE_NEW_WITH_ID,
      payload: res
    })
  ],
  functionFailure: [res => message.error(res.message)]
});

const uploadImageNew = createRequestSaga({
  request: news.uploadImageNew,
  key: "uploadImageNew",
  failure: [],
  success: [
    res => ({
      type: SAVE_UPLOAD_IMAGE_NEW,
      payload: res
    })
  ]
});

const confirmUploadImageBannerNew = createRequestSaga({
  request: news.confirmUploadImageBannerNew,
  key: "confirmUploadImageBannerNew",
  failure: [],
  functionSuccess: [() => message.success("Thay đổi thành công")],
  functionFailure: [() => message.error("Ảnh chưa được chọn")]
});

export default [
  function* fetchWatcher() {
    yield all([
      takeLatest(GET_ALL_NEW, getAllNew),
      takeLatest(DELL_NEW, dellNew),
      takeLatest(CREATE_SINGLE_NEW, createSingleNew),
      takeLatest(UPDATE_SINGLE_NEW, updateSingleNew),
      takeLatest(GET_NEW_WITH_ID, getNewWithId),
      takeLatest(UPLOAD_IMAGE_NEW, uploadImageNew),
      takeLatest(CONFIRM_UPLOAD_IMAGE_BANNER_NEW, confirmUploadImageBannerNew)
    ]);
  }
];
