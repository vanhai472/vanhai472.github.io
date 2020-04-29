import { takeLatest, all } from "redux-saga/effects";
import category from "../api/category";
import {
  GET_ALL_CATEGORY,
  SAVE_ALL_CATEGORY,
  DELL_CATEGORY,
  SAVE_DELL_CATEGORY,
  CREATE_CATEGORY,
  UPDATE_CATEGORY,
  GET_CATEGORY_WITH_ID,
  SAVE_CATEGORY_WITH_ID
} from "../actions/constants";
import { createRequestSaga } from "./common";
import { message } from "antd";

const getAllCategory = createRequestSaga({
  request: category.getAllCategory,
  key: "getAllCategory",
  success: [
    res => ({
      type: SAVE_ALL_CATEGORY,
      payload: res
    })
  ],
  functionFailure: [res => message.error(res.message)]
});
const dellCategory = createRequestSaga({
  request: category.deleteCategory,
  key: "dellCategory",
  success: [
    res => ({
      type: SAVE_DELL_CATEGORY,
      payload: res
    })
  ],
  failure: [],
  functionFailure: [res => message.error(res)],
  functionSuccess: [() => message.success("Xóa thành công")]
});

const createSingleCategory = createRequestSaga({
  request: category.createCategory,
  key: "createCategory",
  failure: [],
  functionSuccess: [() => message.success("Tạo mới thành công")],
  functionFailure: [res => message.error(res.message)]
});

const updateSingleCategory = createRequestSaga({
  request: category.updateCategory,
  key: "updateCategory",
  failure: [],
  functionSuccess: [() => message.success("Cập nhật thành công")],
  functionFailure: [res => message.error(res.message)]
});

const getCategoryWithId = createRequestSaga({
  request: category.getCategoryWithID,
  key: "getCategoryWithID",
  success: [
    res => ({
      type: SAVE_CATEGORY_WITH_ID,
      payload: res
    })
  ],
  functionFailure: [res => message.error(res.message)]
});

export default [
  function* fetchWatcher() {
    yield all([
      takeLatest(DELL_CATEGORY, dellCategory),
      takeLatest(GET_ALL_CATEGORY, getAllCategory),
      takeLatest(CREATE_CATEGORY, createSingleCategory),
      takeLatest(UPDATE_CATEGORY, updateSingleCategory),
      takeLatest(GET_CATEGORY_WITH_ID, getCategoryWithId)
    ]);
  }
];
