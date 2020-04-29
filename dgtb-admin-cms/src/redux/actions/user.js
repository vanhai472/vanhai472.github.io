import {
  GET_ALL_USER,
  ACTIVESTATUS,
  INACTIVESTATUS,
  DELL_USER,
  GET_USER_WITH_ID,
  CREATE_SINGLE_USER,
  UPDATE_SINGLE_USER,
  SEARCH_USER,
  DELL_IMG_SINGLE_USER,
  CHANGE_PASSWORD_USER,
  UPLOAD_IMAGE_USER,
  CONFIRM_UPLOAD_IMAGE_USER
} from "./constants";

export const actGetAllUser = (...args) => ({
  type: GET_ALL_USER,
  args
});

export const actDellUser = (...args) => ({
  type: DELL_USER,
  args
});

export const actGetUserWithId = (...args) => ({
  type: GET_USER_WITH_ID,
  args
});

export const activeStatus = (...args) => ({
  type: ACTIVESTATUS,
  args
});

export const InactiveStatus = (...args) => ({
  type: INACTIVESTATUS,
  args
});

export const createSingleUser = (...args) => ({
  type: CREATE_SINGLE_USER,
  args
});

export const updateSingleUser = (...args) => ({
  type: UPDATE_SINGLE_USER,
  args
});

export const searchUser = (...args) => ({
  type: SEARCH_USER,
  args
});

export const dellImgUser = (...args) => ({
  type: DELL_IMG_SINGLE_USER,
  args
});

export const actChangePasswordUser = (...args) => ({
  type: CHANGE_PASSWORD_USER,
  args
});

export const uploadImageUser = (...args) => ({
  type: UPLOAD_IMAGE_USER,
  args
});

export const confirmUploadImageUser = (...args) => ({
  type: CONFIRM_UPLOAD_IMAGE_USER,
  args
});
