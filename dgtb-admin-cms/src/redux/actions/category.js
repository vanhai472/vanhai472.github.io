import {
  GET_ALL_CATEGORY,
  DELL_CATEGORY,
  CREATE_CATEGORY,
  UPDATE_CATEGORY,
  GET_CATEGORY_WITH_ID
} from "./constants";

export const actGetAllCategory = (...args) => ({
  type: GET_ALL_CATEGORY,
  args
});

export const actDellCategory = (...args) => ({
  type: DELL_CATEGORY,
  args
});

export const actCreateCategory = (...args) => ({
  type: CREATE_CATEGORY,
  args
});

export const actUpdateCategory = (...args) => ({
  type: UPDATE_CATEGORY,
  args
});

export const actGetCategoryWithId = (...args) => ({
  type: GET_CATEGORY_WITH_ID,
  args
});
