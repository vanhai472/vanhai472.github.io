import { SAVE_GET_ALL_SETTING } from "../actions/constants";

const init = {
  allSetting: [],
  totalPage: 0,
  totalData: 0
};

export default (state = init, { type, payload }) => {
  switch (type) {
    case SAVE_GET_ALL_SETTING:
      return {
        ...state,
        allSetting: payload.masters,
        totalPage: payload.totalPage
        // totalData: payload.totalData
      };
    default:
      return state;
  }
};
