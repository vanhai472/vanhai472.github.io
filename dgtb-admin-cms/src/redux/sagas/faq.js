import { takeLatest, all } from "redux-saga/effects";
import faqs from "../api/faqs";
import {
  GET_ALL_FAQ,
  SAVE_GET_ALL_FAQ,
  DELL_FAQ,
  SAVE_DELL_FAQ,
  CREATE_SINGLE_FAQ,
  UPDATE_SINGLE_FAQ,
  GET_FAQ_WITH_ID,
  SAVE_FAQ_WITH_ID
} from "../actions/constants";
import { createRequestSaga } from "./common";
import { message } from "antd";
// lấy dữ liệu FAQ
const getAllFaq = createRequestSaga({
  request: faqs.getAllFaq,
  key: "getAllFaq",
  success: [
    res => ({
      type: SAVE_GET_ALL_FAQ,
      payload: res
    })
  ],
  functionFailure: [res => message.error(res.message)]
});
// Xoá FAQ
const dellFAQ = createRequestSaga({
  request: faqs.deleteFaq,
  key: "dellUser",
  success: [
    res => ({
      type: SAVE_DELL_FAQ,
      payload: res
    })
  ],
  failure: [],
  functionFailure: [res => message.error(res)],
  functionSuccess: [() => message.success("Xóa thành công")]
});

const createSingleFaq = createRequestSaga({
  request: faqs.createFaq,
  key: "createFaq",
  failure: [],
  functionSuccess: [() => message.success("Tạo mới thành công")],
  functionFailure: [res => message.error(res.message)]
});

const updateSingleFaq = createRequestSaga({
  request: faqs.updateFaq,
  key: "updateFaq",
  failure: [],
  functionSuccess: [() => message.success("Cập nhật thành công")],
  functionFailure: [res => message.error(res.message)]
});

const getFaqWithId = createRequestSaga({
  request: faqs.getFaqWithID,
  key: "getFaqWithID",
  success: [
    res => ({
      type: SAVE_FAQ_WITH_ID,
      payload: res
    })
  ]
});

export default [
  function* fetchWatcher() {
    yield all([
      takeLatest(DELL_FAQ, dellFAQ),
      takeLatest(GET_ALL_FAQ, getAllFaq),
      takeLatest(CREATE_SINGLE_FAQ, createSingleFaq),
      takeLatest(UPDATE_SINGLE_FAQ, updateSingleFaq),
      takeLatest(GET_FAQ_WITH_ID, getFaqWithId)
    ]);
  }
];
