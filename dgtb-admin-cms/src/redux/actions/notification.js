import {
  GET_ALL_NOTIFICATION,
  DELL_NOTIFICATION,
  CREATE_NOTIFICATION,
  UPDATE_NOTIFICATION,
  GET_NOTIFICATION_WITH_ID
} from "./constants";

export const actGetAllNotification = (...args) => ({
  type: GET_ALL_NOTIFICATION,
  args
});

export const actDellNotification = (...args) => ({
  type: DELL_NOTIFICATION,
  args
});

export const actCreateNotification = (...args) => ({
  type: CREATE_NOTIFICATION,
  args
});

export const actUpdateNotification = (...args) => ({
  type: UPDATE_NOTIFICATION,
  args
});

export const actGetNotifiCationWithId = (...args) => ({
  type: GET_NOTIFICATION_WITH_ID,
  args
});
