import {
  GET_ALL_RECOMMEND,
  DELL_RECOMMEND,
  CREATE_SINGLE_RECOMMEND,
  UPDATE_SINGLE_RECOMMEND
} from "./constants";

export const actGetAllRecommend = (...args) => ({
  type: GET_ALL_RECOMMEND,
  args
});

export const actDellRecommend = (...args) => ({
  type: DELL_RECOMMEND,
  args
});
export const createSingleRecommend = (...args) => ({
  type: CREATE_SINGLE_RECOMMEND,
  args
});

export const updateSingleRecommend = (...args) => ({
  type: UPDATE_SINGLE_RECOMMEND,
  args
});
