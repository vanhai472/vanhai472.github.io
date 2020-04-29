import {
  GET_ALL_MASTER,
  ACTIVE_STATUS_MASTER,
  INACTIVE_STATUS_MASTER,
  DELL_MASTER,
  GET_MASTER_WITH_ID,
  CREATE_SINGLE_MASTER,
  UPDATE_SINGLE_MASTER,
  SEARCH_MASTER,
  CHANGE_PASSWORD_MASTER,
  UPDATE_SINGLE_MASTER_CONTACT,
  UPLOAD_IMAGE_MASTER,
  CONFIRM_UPLOAD_IMAGE_MASTER,
  CREATE_SERVICE_MASTER,
  UPDATE_SERVICE_MASTER,
  DELETE_SERVICE_MASTER
} from "./constants";

export const actGetAllMaster = (...args) => ({
  type: GET_ALL_MASTER,
  args
});

export const actDellMaster = (...args) => ({
  type: DELL_MASTER,
  args
});

export const actGetMasterWithId = (...args) => ({
  type: GET_MASTER_WITH_ID,
  args
});

export const activeStatusMaster = (...args) => ({
  type: ACTIVE_STATUS_MASTER,
  args
});

export const InactiveStatusMaster = (...args) => ({
  type: INACTIVE_STATUS_MASTER,
  args
});
export const createSingleMaster = (...args) => ({
  type: CREATE_SINGLE_MASTER,
  args
});

export const updateSingleMaster = (...args) => ({
  type: UPDATE_SINGLE_MASTER,
  args
});

export const searchMaster = (...args) => ({
  type: SEARCH_MASTER,
  args
});

export const actChangePasswordMaster = (...args) => ({
  type: CHANGE_PASSWORD_MASTER,
  args
});

export const updateMasterContact = (...args) => ({
  type: UPDATE_SINGLE_MASTER_CONTACT,
  args
});

export const uploadImageMaster = (...args) => ({
  type: UPLOAD_IMAGE_MASTER,
  args
});

export const confirmUploadImageMaster = (...args) => ({
  type: CONFIRM_UPLOAD_IMAGE_MASTER,
  args
});

export const actCreateServiceMaster = (...args) => ({
  type: CREATE_SERVICE_MASTER,
  args
});

export const actUpdateServiceMaster = (...args) => ({
  type: UPDATE_SERVICE_MASTER,
  args
});

export const actDeleteServiceMaster = (...args) => ({
  type: DELETE_SERVICE_MASTER,
  args
});
