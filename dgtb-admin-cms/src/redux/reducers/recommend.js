import { SAVE_GET_ALL_RECOMMEND } from "../actions/constants";

const init = {
  allRecommend: [],
  totalPage: 0,
  totalData: 0
};

export default (state = init, { type, payload }) => {
  switch (type) {
    case SAVE_GET_ALL_RECOMMEND:
      return {
        ...state,
        allRecommend: payload.masters,
        totalPage: payload.totalPage
        // totalData: payload.totalData
      };
    default:
      return state;
  }
};
