import {
  GET_ALL_COMPLAINTS,
  DELL_COMPLAINTS,
  CREATE_SINGLE_COMPLAINTS,
  UPDATE_SINGLE_COMPLAINTS,
  GET_COMPLAINTS_WITH_ID,
  ANSWER_COMPLAINTS_USER
} from "./constants";

export const actGetAllComplaints = (...args) => ({
  type: GET_ALL_COMPLAINTS,
  args
});

export const actDellComplaints = (...args) => ({
  type: DELL_COMPLAINTS,
  args
});
export const createSingleComplaints = (...args) => ({
  type: CREATE_SINGLE_COMPLAINTS,
  args
});

export const updateSingleComplaints = (...args) => ({
  type: UPDATE_SINGLE_COMPLAINTS,
  args
});

export const actGetComplaintsWithId = (...args) => ({
  type: GET_COMPLAINTS_WITH_ID,
  args
});

export const actAnswerComplaintsUser = (...args) => ({
  type: ANSWER_COMPLAINTS_USER,
  args
});
