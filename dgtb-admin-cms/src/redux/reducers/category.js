import {
  SAVE_ALL_CATEGORY,
  SAVE_DELL_CATEGORY,
  SAVE_CATEGORY_WITH_ID
} from "../actions/constants";
const init = {
  allCategory: [],
  totalPage: 0,
  totalData: 0
};

export default (state = init, { type, payload }) => {
  switch (type) {
    case SAVE_ALL_CATEGORY:
      return {
        ...state,
        allCategory: payload.results,
        totalPage: payload.totalPage,
        totalData: payload.totalPage * 10
      };
    case SAVE_DELL_CATEGORY:
      return {
        ...state,
        payload
      };
    case SAVE_CATEGORY_WITH_ID:
      return {
        ...state,
        selectedSingleCategory: payload
      };
    default:
      return state;
  }
};
