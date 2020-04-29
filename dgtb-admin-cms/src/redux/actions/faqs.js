import {
  GET_ALL_FAQ,
  DELL_FAQ,
  CREATE_SINGLE_FAQ,
  UPDATE_SINGLE_FAQ,
  GET_FAQ_WITH_ID
} from "./constants";

export const actGetAllFaq = (...args) => ({
  type: GET_ALL_FAQ,
  args
});

export const actDellFaq = (...args) => ({
  type: DELL_FAQ,
  args
});
export const createSingleFaq = (...args) => ({
  type: CREATE_SINGLE_FAQ,
  args
});

export const updateSingleFaq = (...args) => ({
  type: UPDATE_SINGLE_FAQ,
  args
});

export const actGetFaqWithId = (...args) => ({
  type: GET_FAQ_WITH_ID,
  args
});
