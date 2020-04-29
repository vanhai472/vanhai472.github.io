import {
  GET_ALL_RATING,
  DELL_RATING,
  CREATE_SINGLE_RATING,
  UPDATE_SINGLE_RATING,
  GET_COMMENT_WITH_ID_RATE
} from "./constants";

export const actGetAllRating = (...args) => ({
  type: GET_ALL_RATING,
  args
});

export const actDellRating = (...args) => ({
  type: DELL_RATING,
  args
});
export const createSingleRating = (...args) => ({
  type: CREATE_SINGLE_RATING,
  args
});

export const updateSingleRating = (...args) => ({
  type: UPDATE_SINGLE_RATING,
  args
});
export const actGetCommentWithIdRate = (...args) => ({
  type: GET_COMMENT_WITH_ID_RATE,
  args
});
