import { SAVE_GET_ALL_COMMENT,SAVE_DELL_COMMENT } from "../actions/constants";

const init = {
  allComment: [],
  totalPage: 0,
  totalData: 0
};

export default (state = init, { type, payload }) => {
  switch (type) {
    case SAVE_GET_ALL_COMMENT:
      return {
        ...state,
        allComment: payload.comments,
        totalPage: payload.totalPage
        // totalData: payload.totalData
      };
    case SAVE_DELL_COMMENT :
      return{
        ...state,
        payload
      }
    default:
      return state;
  }
};
