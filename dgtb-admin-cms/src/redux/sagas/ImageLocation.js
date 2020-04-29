import { takeLatest, all } from "redux-saga/effects";
import ImageLocation from "../api/imageLocation";
import {
  GET_ALL_IMAGE_LOCATION,
  SAVE_GET_IMAGE_LOCATION,
  ACTIVE_IMAGE_LOCATION,
  INACTIVE_IMAGE_LOCATION,
  DELL_IMAGE_LOCATION,
  SAVE_DELL_IMAGE_LOCATION,
  GET_IMAGE_LOCATION_WITH_ID,
  SAVE_IMAGE_LOCATION_WITH_ID,
  SEARCH_IMAGE_LOCATION,
  CREATE_SINGLE_IMAGE_LOCATION,
  UPDATE_SINGLE_IMAGE_LOCATION,
  DELL_IMG_SINGLE_IMAGE_LOCATION,
  UPLOAD_IMAGE_IMAGE_LOCATION,
  SAVE_UPLOAD_IMAGE_IMAGE_LOCATION,
  CONFIRM_UPLOAD_IMAGE_IMAGE_LOCATION
} from "../actions/constants";

import { createRequestSaga } from "./common";

import { message } from "antd";

// cái này là hàm lấy hết toàn bộ ảnh
const getAllImageLocation = createRequestSaga({
  request: ImageLocation.getAllImageLocation,
  key: "getAllImageLocation",
  success: [
    res => ({
      type: SAVE_GET_IMAGE_LOCATION,
      payload: res
    })
  ],
  functionFailure: [res => message.error(res.message)]
});
const dellImageLocation = createRequestSaga({
  request: ImageLocation.deleteImageLocation,
  key: "dellNew",
  success: [
    res => ({
      type: SAVE_DELL_IMAGE_LOCATION,
      payload: res
    })
  ],
  failure: [],
  functionFailure: [res => message.error(res)],
  functionSuccess: [() => message.success("Xóa thành công")]
});
export default [
  function* fetchWatcher() {
    yield all([takeLatest(GET_ALL_IMAGE_LOCATION, getAllImageLocation),
      takeLatest(SAVE_DELL_IMAGE_LOCATION, dellImageLocation)
    ]);
  }
];
