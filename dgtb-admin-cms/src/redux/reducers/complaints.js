import {
  SAVE_GET_ALL_COMPLAINTS,
  SAVE_DELL_COMPLAINTS,
  SAVE_COMPLAINTS_WITH_ID
} from "../actions/constants";

const init = {
  allComplaints: [],
  totalPage: 0,
  totalData: 0
};

export default (state = init, { type, payload }) => {
  switch (type) {
    case SAVE_GET_ALL_COMPLAINTS:
      return {
        ...state,
        allComplaints: payload.feedbacks,
        totalPage: payload.totalPage
        // totalData: payload.totalData
      };
    case SAVE_DELL_COMPLAINTS:
      return {
        ...state,
        payload
      };
    case SAVE_COMPLAINTS_WITH_ID:
      return {
        ...state,
        selectedSingleComplaints: payload
      };
    default:
      return state;
  }
};
