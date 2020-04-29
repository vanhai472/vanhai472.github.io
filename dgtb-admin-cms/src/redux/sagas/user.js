import { takeLatest, all } from "redux-saga/effects";
import user from "../api/user";
import {
  GET_ALL_USER,
  SAVE_GET_ALL_USER,
  ACTIVESTATUS,
  INACTIVESTATUS,
  DELL_USER,
  SAVE_DELL_USER,
  GET_USER_WITH_ID,
  SAVE_USER_WITH_ID,
  SEARCH_USER,
  CREATE_SINGLE_USER,
  UPDATE_SINGLE_USER,
  DELL_IMG_SINGLE_USER,
  CHANGE_PASSWORD_USER,
  UPLOAD_IMAGE_USER,
  SAVE_UPLOAD_IMAGE_USER,
  CONFIRM_UPLOAD_IMAGE_USER
} from "../actions/constants";

import { createRequestSaga } from "./common";

import { message } from "antd";

// cái này là hàm lấy hết toàn bộ user
const getAllUser = createRequestSaga({
  request: user.getAllUser,
  key: "getAllUser",
  success: [
    res => ({
      type: SAVE_GET_ALL_USER,
      payload: res
    })
  ],
  functionFailure: [res => message.error(res.message)]
});

const activeStatus = createRequestSaga({
  request: user.activeStatus,
  key: "activeStatus",
  functionFailure: [res => message.error(res)],
  functionSuccess: [() => message.success("Kích hoạt thành công")]
});

const InactiveStatus = createRequestSaga({
  request: user.InactiveStatus,
  key: "InactiveStatus",
  functionFailure: [res => message.error(res)],
  functionSuccess: [() => message.error("Hủy kích hoạt thành công")]
});

const dellUser = createRequestSaga({
  request: user.deleteUser,
  key: "dellUser",
  success: [
    res => ({
      type: SAVE_DELL_USER,
      payload: res
    })
  ],
  failure: [],
  functionFailure: [res => message.error(res)],
  functionSuccess: [() => message.success("Xóa thành công")]
});

const getUserWithId = createRequestSaga({
  request: user.getUserWithID,
  key: "getUserWithId",
  success: [
    res => ({
      type: SAVE_USER_WITH_ID,
      payload: res
    })
  ],
  functionFailure: [res => message.error(res.message)]
});

const createSingleUser = createRequestSaga({
  request: user.createUser,
  key: "createUser",
  failure: [],
  functionSuccess: [() => message.success("Tạo mới thành công")],
  functionFailure: [res => message.error(res.message)]
});

const updateSingleUser = createRequestSaga({
  request: user.updateUser,
  key: "createUser",
  failure: [],
  functionSuccess: [() => message.success("Cập nhật thành công")],
  functionFailure: [res => message.error(res.message)]
});

const searchUser = createRequestSaga({
  request: user.searchUser,
  key: "searchUser",
  failure: [],
  success: [
    res => ({
      type: SAVE_GET_ALL_USER,
      payload: res
    })
  ],
  functionFailure: [res => message.error(res.message)]
});

const dellImgUser = createRequestSaga({
  request: user.dellImgUser,
  key: "dellImgUser",
  failure: [],
  functionFailure: [res => message.error(res)],
  functionSuccess: [() => message.success("Xóa ảnh thành công")]
});

const changePasswordUser = createRequestSaga({
  request: user.changePasswordUser,
  key: "changePasswordUser",
  failure: [],
  functionFailure: [() => message.error("Cập nhật không thành công")],
  functionSuccess: [() => message.success("Thay đổi thành công")]
});

const uploadImageUser = createRequestSaga({
  request: user.uploadImageUser,
  key: "uploadImageUser",
  failure: [],
  success: [
    res => ({
      type: SAVE_UPLOAD_IMAGE_USER,
      payload: res
    })
  ]
});

const confirmUploadImageUser = createRequestSaga({
  request: user.confirmUploadImageUser,
  key: "confirmUploadImageUser",
  failure: [],
  functionSuccess: [() => message.success("Thay đổi thành công")],
  functionFailure: [() => message.error("Ảnh chưa được chọn")]
});

export default [
  function* fetchWatcher() {
    yield all([
      takeLatest(GET_ALL_USER, getAllUser),
      takeLatest(ACTIVESTATUS, activeStatus),
      takeLatest(INACTIVESTATUS, InactiveStatus),
      takeLatest(DELL_USER, dellUser),
      takeLatest(GET_USER_WITH_ID, getUserWithId),
      takeLatest(CREATE_SINGLE_USER, createSingleUser),
      takeLatest(UPDATE_SINGLE_USER, updateSingleUser),
      takeLatest(SEARCH_USER, searchUser),
      takeLatest(DELL_IMG_SINGLE_USER, dellImgUser),
      takeLatest(CHANGE_PASSWORD_USER, changePasswordUser),
      takeLatest(UPLOAD_IMAGE_USER, uploadImageUser),
      takeLatest(CONFIRM_UPLOAD_IMAGE_USER, confirmUploadImageUser)
    ]);
  }
];
