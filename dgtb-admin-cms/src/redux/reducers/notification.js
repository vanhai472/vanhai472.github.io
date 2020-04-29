import {
  SAVE_ALL_NOTIFICATION,
  SAVE_NOTIFICATION_WITH_ID
} from "../actions/constants";
const init = {
  allNotification: [],
  totalPage: 0,
  totalData: 0
};

export default (state = init, { type, payload }) => {
  switch (type) {
    case SAVE_ALL_NOTIFICATION:
      return {
        ...state,
        allNotification: payload.results,
        totalPage: payload.totalPage,
        totalData: payload.totalPage * 10
      };

    case SAVE_NOTIFICATION_WITH_ID:
      return {
        ...state,
        selectedSingleNotification: payload
      };
    default:
      return state;
  }
};
