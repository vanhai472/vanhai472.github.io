import {
  GET_ALL_SCHEDULE,
  DELL_SCHEDULE,
  CREATE_SINGLE_SCHEDULE,
  UPDATE_SINGLE_SCHEDULE
} from "./constants";

export const actGetAllSchedule = (...args) => ({
  type: GET_ALL_SCHEDULE,
  args
});

export const actDellSchedule = (...args) => ({
  type: DELL_SCHEDULE,
  args
});
export const createSingleSchedule = (...args) => ({
  type: CREATE_SINGLE_SCHEDULE,
  args
});

export const updateSingleSchedule = (...args) => ({
  type: UPDATE_SINGLE_SCHEDULE,
  args
});
