import {
  GET_ALL_NEW,
  DELL_NEW,
  CREATE_SINGLE_NEW,
  UPDATE_SINGLE_NEW,
  GET_NEW_WITH_ID,
  UPLOAD_IMAGE_NEW,
  CONFIRM_UPLOAD_IMAGE_BANNER_NEW
} from "./constants";

export const actGetAllNew = (...args) => ({
  type: GET_ALL_NEW,
  args
});

export const actDellNew = (...args) => ({
  type: DELL_NEW,
  args
});
export const createSingleNew = (...args) => ({
  type: CREATE_SINGLE_NEW,
  args
});

export const updateSingleNew = (...args) => ({
  type: UPDATE_SINGLE_NEW,
  args
});

export const actGetNewWithId = (...args) => ({
  type: GET_NEW_WITH_ID,
  args
});

export const uploadImageNew = (...args) => ({
  type: UPLOAD_IMAGE_NEW,
  args
});

export const confirmUploadImageBannerNew = (...args) => ({
  type: CONFIRM_UPLOAD_IMAGE_BANNER_NEW,
  args
});
