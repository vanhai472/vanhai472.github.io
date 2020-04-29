import {
  SAVE_GET_ALL_NEW,
  SAVE_NEW_WITH_ID,
  SAVE_UPLOAD_IMAGE_NEW
} from "../actions/constants";

const init = {
  allNews: [],
  totalPage: 0,
  totalData: 0
};

export default (state = init, { type, payload }) => {
  switch (type) {
    case SAVE_GET_ALL_NEW:
      return {
        ...state,
        allNews: payload.news,
        totalPage: payload.totalPage,
        totalData: payload.totalPage * 10
      };
    case SAVE_NEW_WITH_ID:
      return {
        ...state,
        selectedSingleNews: payload
      };

    case SAVE_UPLOAD_IMAGE_NEW:
      return {
        ...state,
        uploadImage: payload
      };
    default:
      return state;
  }
};
