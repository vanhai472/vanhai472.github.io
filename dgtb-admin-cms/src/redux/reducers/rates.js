import {
  SAVE_GET_ALL_RATING,
  SAVE_COMMENT_WITH_ID_RATE
} from "../actions/constants";

const init = {
  allRating: [],
  totalPage: 0,
  totalData: 0
};

export default (state = init, { type, payload }) => {
  switch (type) {
    case SAVE_GET_ALL_RATING:
      return {
        ...state,
        allRating: payload.rates,
        totalPage: payload.totalPage,
        totalData: payload.totalPage * 10
      };

    case SAVE_COMMENT_WITH_ID_RATE:
      return {
        ...state,
        seletedCommentWithIdRate: payload
      };
    default:
      return state;
  }
};
