import {
  SAVE_DELL_IMAGE_LOCATION,
  SAVE_UPLOAD_IMAGE_IMAGE_LOCATION,
  SAVE_SEARCH_IMAGE_LOCATION,
  SAVE_IMAGE_LOCATION_WITH_ID,
  SAVE_GET_IMAGE_LOCATION
} from "../actions/constants";

const init = {
  allImageLocation: [],
  totalPage: 0,
  totalData: 0
};

export default (state = init, { type, payload }) => {
  switch (type) {
    case SAVE_GET_IMAGE_LOCATION:
      return {
        ...state,
        allImageLocation: payload.locations,
        totalPage: payload.totalPage,
        totalData: payload.totalPage * 10
      };
      case SAVE_DELL_IMAGE_LOCATION:
        return {
          ...state,
          payload
        };
    default:
      return state;
  }
};
