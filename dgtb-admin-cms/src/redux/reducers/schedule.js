import { SAVE_GET_ALL_SCHEDULE } from "../actions/constants";

const init = {
  allSchedule: [],
  totalPage: 0,
  totalData: 0
};

export default (state = init, { type, payload }) => {
  switch (type) {
    case SAVE_GET_ALL_SCHEDULE:
      return {
        ...state,
        allSchedule: payload.masters,
        totalPage: payload.totalPage
        // totalData: payload.totalData
      };
    default:
      return state;
  }
};
