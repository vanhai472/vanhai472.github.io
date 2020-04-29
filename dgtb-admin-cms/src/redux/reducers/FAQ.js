import {
  SAVE_GET_ALL_FAQ,
  SAVE_DELL_FAQ,
  SAVE_FAQ_WITH_ID
} from "../actions/constants";
const init = {
  allFaq: [],
  totalPage: 0,
  totalData: 0
};

export default (state = init, { type, payload }) => {
  switch (type) {
    case SAVE_GET_ALL_FAQ:
      return {
        ...state,
        allFaq: payload.fqas,
        totalPage: payload.totalPage,
        totalData: payload.totalPage * 10
      };
    case SAVE_DELL_FAQ:
      return {
        ...state,
        payload
      };
    case SAVE_FAQ_WITH_ID:
      return {
        ...state,
        selectedSingleFaq: payload
      };
    default:
      return state;
  }
};
