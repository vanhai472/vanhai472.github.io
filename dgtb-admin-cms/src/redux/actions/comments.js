import {
  GET_ALL_COMMENT,
  DELL_COMMENT,
  CREATE_SINGLE_COMMENT,
  UPDATE_SINGLE_COMMENT
} from "./constants";

export const actGetAllComment = (...args) => ({
  type: GET_ALL_COMMENT,
  args
});

export const actDellComment = (...args) => ({
  type: DELL_COMMENT,
  args
});
export const createSingleComment = (...args) => ({
  type: CREATE_SINGLE_COMMENT,
  args
});

export const updateSingleComment = (...args) => ({
  type: UPDATE_SINGLE_COMMENT,
  args
});
