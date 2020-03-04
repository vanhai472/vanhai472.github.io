import * as types from "../constants/ui";
const initialState = {
  show_loading: false,
};
const UiReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SHOW_LOADING: {
      return {
        ...state,
        show_loading: true
      };
    }
    case types.HIDE_LOADING: {
      return {
        ...state,
        show_loading: false
      };
    }
    default:
      return state;
  }
};

export default UiReducer;
