import {
  GET_ALL_SETTING,
  DELL_SETTING,
  CREATE_SINGLE_SETTING,
  UPDATE_SINGLE_SETTING
} from "./constants";

export const actGetAllSetting = (...args) => ({
  type: GET_ALL_SETTING,
  args
});

export const actDellSetting = (...args) => ({
  type: DELL_SETTING,
  args
});
export const createSingleSetting = (...args) => ({
  type: CREATE_SINGLE_SETTING,
  args
});

export const updateSingleSetting = (...args) => ({
  type: UPDATE_SINGLE_SETTING,
  args
});
