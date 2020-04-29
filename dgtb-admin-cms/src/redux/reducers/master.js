import {
  SAVE_GET_ALL_MASTER,
  SAVE_DELL_MASTER,
  SAVE_MASTER_WITH_ID,
  SAVE_SEARCH_MASTER,
  SAVE_UPLOAD_IMAGE_MASTER
} from "../actions/constants";

const init = {
  allMaster: [],
  totalPage: 0,
  totalData: 0
};

export default (state = init, { type, payload }) => {
  switch (type) {
    case SAVE_GET_ALL_MASTER:
      return {
        ...state,
        allMaster: payload.masters,
        totalPage: payload.totalPage,
        totalData: payload.totalPage * 10
      };
    case SAVE_DELL_MASTER:
      return {
        ...state,
        payload
      };
    case SAVE_MASTER_WITH_ID:
      return {
        ...state,
        selectedSingleMaster: payload
      };
    case SAVE_SEARCH_MASTER:
      return {
        ...state,
        searhData: payload
      };
    case SAVE_UPLOAD_IMAGE_MASTER:
      return {
        ...state,
        uploadImage: payload
      };
    default:
      return state;
  }
};
