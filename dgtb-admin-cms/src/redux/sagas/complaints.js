import { takeLatest, all } from "redux-saga/effects";
import complaints from "../api/complaints";
import {
  GET_ALL_COMPLAINTS,
  SAVE_GET_ALL_COMPLAINTS,
  DELL_COMPLAINTS,
  SAVE_DELL_COMPLAINTS,
  CREATE_SINGLE_COMPLAINTS,
  UPDATE_SINGLE_COMPLAINTS,
  GET_COMPLAINTS_WITH_ID,
  SAVE_COMPLAINTS_WITH_ID,
  ANSWER_COMPLAINTS_USER
} from "../actions/constants";
import { createRequestSaga } from "./common";
import { message } from "antd";

const getAllComplaints = createRequestSaga({
  request: complaints.getAllComplaints,
  key: "getAllComplain",
  success: [
    res => ({
      type: SAVE_GET_ALL_COMPLAINTS,
      payload: res
    })
  ],
  functionFailure: [res => message.error(res.message)]
});
const dellComplaints = createRequestSaga({
  request: complaints.deleteComplaints,
  key: "dellComplaints",
  success: [
    res => ({
      type: SAVE_DELL_COMPLAINTS,
      payload: res
    })
  ],
  failure: [],
  functionFailure: [res => message.error(res)],
  functionSuccess: [() => message.success("Xóa thành công")]
});

const createSingleComplaints = createRequestSaga({
  request: complaints.createComplaints,
  key: "createComplaints",
  failure: [],
  functionSuccess: [() => message.success("Tạo mới thành công")],
  functionFailure: [res => message.error(res.message)]
});

const updateSingleComplaints = createRequestSaga({
  request: complaints.updateComplaints,
  key: "updateComplaints",
  failure: [],
  functionSuccess: [() => message.success("Cập nhật thành công")],
  functionFailure: [res => message.error(res.message)]
});

const getComplaintsWithId = createRequestSaga({
  request: complaints.getComplaintsWithID,
  key: "getComplaintsWithID",
  success: [
    res => ({
      type: SAVE_COMPLAINTS_WITH_ID,
      payload: res
    })
  ],
  functionFailure: [res => message.error(res.message)]
});

const answerComplaintsUser = createRequestSaga({
  request: complaints.answerComplaintsUser,
  key: "answerComplaintsUser",
  failure: []
});

export default [
  function* fetchWatcher() {
    yield all([
      takeLatest(GET_ALL_COMPLAINTS, getAllComplaints),
      takeLatest(DELL_COMPLAINTS, dellComplaints),
      takeLatest(CREATE_SINGLE_COMPLAINTS, createSingleComplaints),
      takeLatest(UPDATE_SINGLE_COMPLAINTS, updateSingleComplaints),
      takeLatest(GET_COMPLAINTS_WITH_ID, getComplaintsWithId),
      takeLatest(ANSWER_COMPLAINTS_USER, answerComplaintsUser)
    ]);
  }
];
