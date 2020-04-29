import { takeLatest, all } from "redux-saga/effects";
import master from "../api/master";
import {
  GET_ALL_MASTER,
  SAVE_GET_ALL_MASTER,
  ACTIVE_STATUS_MASTER,
  INACTIVE_STATUS_MASTER,
  DELL_MASTER,
  GET_MASTER_WITH_ID,
  SAVE_MASTER_WITH_ID,
  SEARCH_MASTER,
  CREATE_SINGLE_MASTER,
  UPDATE_SINGLE_MASTER,
  CHANGE_PASSWORD_MASTER,
  UPDATE_SINGLE_MASTER_CONTACT,
  UPLOAD_IMAGE_MASTER,
  SAVE_UPLOAD_IMAGE_MASTER,
  CONFIRM_UPLOAD_IMAGE_MASTER,
  CREATE_SERVICE_MASTER,
  UPDATE_SERVICE_MASTER,
  DELETE_SERVICE_MASTER
} from "../actions/constants";

import { createRequestSaga } from "./common";

import { message } from "antd";

const getAllMaster = createRequestSaga({
  request: master.getAllMaster,
  key: "getAllMaster",
  success: [
    res => ({
      type: SAVE_GET_ALL_MASTER,
      payload: res
    })
  ],
  functionFailure: [res => message.error(res.message)]
});

const activeStatusMaster = createRequestSaga({
  request: master.activeStatusMaster,
  key: "activeStatusMaster",
  functionFailure: [res => message.error(res)],
  functionSuccess: [() => message.success("Kích hoạt thành công")]
});

const InactiveStatusMaster = createRequestSaga({
  request: master.InactiveStatusMaster,
  key: "InactiveStatusMaster",
  functionFailure: [res => message.error(res)],
  functionSuccess: [() => message.error("Hủy kích hoạt thành công")]
});

const dellMaster = createRequestSaga({
  request: master.deleteMaster,
  key: "deleteMaster",
  failure: [],
  functionFailure: [res => message.error(res)],
  functionSuccess: [() => message.success("Xóa thành công")]
});

const getMasterWithId = createRequestSaga({
  request: master.getMasterWithID,
  key: "getMasterWithID",
  success: [
    res => ({
      type: SAVE_MASTER_WITH_ID,
      payload: res
    })
  ],
  functionFailure: [res => message.error(res.message)]
});

const searchMaster = createRequestSaga({
  request: master.searchMaster,
  key: "searchMaster",
  failure: [],
  success: [
    res => ({
      type: SAVE_GET_ALL_MASTER,
      payload: res
    })
  ],
  functionFailure: [res => message.error(res.message)]
});

const createSingleMaster = createRequestSaga({
  request: master.createMaster,
  key: "createMaster",
  failure: [],
  functionSuccess: [() => message.success("Tạo mới thành công")],
  functionFailure: [res => message.error(res.message)]
});

const updateSingleMaster = createRequestSaga({
  request: master.updateMaster,
  key: "updateMaster",
  failure: [],
  functionSuccess: [() => message.success("Cập nhật thành công")],
  functionFailure: [res => message.error(res.message)]
});

const changePasswordMaster = createRequestSaga({
  request: master.changePasswordMaster,
  key: "changePasswordMaster",
  failure: [],
  functionFailure: [() => message.error("Cập nhật không thành công")],
  functionSuccess: [() => message.success("Thay đổi thành công")]
});

const updateContactMaster = createRequestSaga({
  request: master.contactMaster,
  key: "contactMaster",
  failure: [],
  functionSuccess: [() => message.success("Cập nhật thành công")],
  functionFailure: [res => message.error(res.message)]
});

const uploadImageMaster = createRequestSaga({
  request: master.uploadImageUser,
  key: "uploadImageUser",
  failure: [],
  success: [
    res => ({
      type: SAVE_UPLOAD_IMAGE_MASTER,
      payload: res
    })
  ]
});

const confirmUploadImageMaster = createRequestSaga({
  request: master.confirmUploadImageUser,
  key: "confirmUploadImageUser",
  failure: [],
  functionSuccess: [() => message.success("Thay đổi thành công")]
});

const createServiceMaster = createRequestSaga({
  request: master.createServiceMaster,
  key: "createServiceMaster",
  failure: [],
  functionFailure: [res => message.error(res)],
  functionSuccess: [() => message.success("Thêm dịch vụ thành công")]
});

const deleteServiceMaster = createRequestSaga({
  request: master.deleteServiceMaster,
  key: "deleteServiceMaster",
  failure: [],
  functionSuccess: [() => message.success("Xóa thành công")]
});

const updateServiceMaster = createRequestSaga({
  request: master.updateServiceMaster,
  key: "updateServiceMaster",
  failure: [],
  functionFailure: [res => message.error(res)],
  functionSuccess: [() => message.success("Cập nhật dịch vụ thành công")]
});

export default [
  function* fetchWatcher() {
    yield all([
      takeLatest(GET_ALL_MASTER, getAllMaster),
      takeLatest(ACTIVE_STATUS_MASTER, activeStatusMaster),
      takeLatest(INACTIVE_STATUS_MASTER, InactiveStatusMaster),
      takeLatest(DELL_MASTER, dellMaster),
      takeLatest(GET_MASTER_WITH_ID, getMasterWithId),
      takeLatest(SEARCH_MASTER, searchMaster),
      takeLatest(CREATE_SINGLE_MASTER, createSingleMaster),
      takeLatest(UPDATE_SINGLE_MASTER, updateSingleMaster),
      takeLatest(CHANGE_PASSWORD_MASTER, changePasswordMaster),
      takeLatest(UPDATE_SINGLE_MASTER_CONTACT, updateContactMaster),
      takeLatest(UPLOAD_IMAGE_MASTER, uploadImageMaster),
      takeLatest(CONFIRM_UPLOAD_IMAGE_MASTER, confirmUploadImageMaster),
      takeLatest(CREATE_SERVICE_MASTER, createServiceMaster),
      takeLatest(UPDATE_SERVICE_MASTER, updateServiceMaster),
      takeLatest(DELETE_SERVICE_MASTER, deleteServiceMaster)
    ]);
  }
];
