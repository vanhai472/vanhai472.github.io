import {
  SAVE_GET_ALL_USER,
  SAVE_DELL_USER,
  SAVE_USER_WITH_ID,
  SAVE_SEARCH_USER,
  SAVE_UPLOAD_IMAGE_USER
} from "../actions/constants";

const init = {
  allUser: [],
  totalPage: 0,
  totalData: 0
};

export default (state = init, { type, payload }) => {
  switch (type) {
    case SAVE_GET_ALL_USER:
      return {
        ...state,
        allUser: payload.users,
        totalPage: payload.totalPage,
        totalData: payload.totalPage * 10
      };
    case SAVE_DELL_USER:
      return {
        ...state,
        payload
      };
    case SAVE_USER_WITH_ID:
      return {
        ...state,
        selectedSingleUser: payload
      };
    case SAVE_SEARCH_USER:
      return {
        ...state,
        searhData: payload
      };
    case SAVE_UPLOAD_IMAGE_USER:
      return {
        ...state,
        uploadImage: payload
      };
    default:
      return state;
  }
};
