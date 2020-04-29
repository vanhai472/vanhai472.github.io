import { takeLatest, all } from "redux-saga/effects";
import notification from "../api/notification";
import {
  GET_ALL_NOTIFICATION,
  SAVE_ALL_NOTIFICATION,
  DELL_NOTIFICATION,
  CREATE_NOTIFICATION,
  UPDATE_NOTIFICATION,
  GET_NOTIFICATION_WITH_ID,
  SAVE_NOTIFICATION_WITH_ID
} from "../actions/constants";
import { createRequestSaga } from "./common";
import { message } from "antd";

const getAllNotification = createRequestSaga({
  request: notification.getAllNotification,
  key: "getAllNotification",
  success: [
    res => ({
      type: SAVE_ALL_NOTIFICATION,
      payload: res
    })
  ],
  functionFailure: [res => message.error(res.message)]
});
const dellNotification = createRequestSaga({
  request: notification.deleteNotification,
  key: "deleteNotification",
  failure: [],
  functionFailure: [res => message.error(res)],
  functionSuccess: [() => message.success("Xóa thành công")]
});

const createSingleNotification = createRequestSaga({
  request: notification.createNotification,
  key: "createFaq",
  failure: [],
  functionSuccess: [() => message.success("Tạo mới thành công")],
  functionFailure: [res => message.error(res.message)]
});

const updateSingleNotification = createRequestSaga({
  request: notification.updateNotification,
  key: "updateNotification",
  failure: [],
  functionSuccess: [() => message.success("Cập nhật thành công")],
  functionFailure: [res => message.error(res.message)]
});

// const getNotificationWithId = createRequestSaga({
//   request: notification.get,
//   key: "getFaqWithID",
//   success: [
//     res => ({
//       type: SAVE_CATEGORY_WITH_ID,
//       payload: res
//     })
//   ],
//   functionFailure: [res => message.error(res.message)]
// });

export default [
  function* fetchWatcher() {
    yield all([
      takeLatest(DELL_NOTIFICATION, dellNotification),
      takeLatest(GET_ALL_NOTIFICATION, getAllNotification),
      takeLatest(CREATE_NOTIFICATION, createSingleNotification),
      takeLatest(UPDATE_NOTIFICATION, updateSingleNotification)
    ]);
  }
];
