import { CHANGE_BACKGROUND_CALENDAR } from "../actions/constants";

const init = {
  changeBack: 1,
};

const myReducer = (state = init, action) => {
  if (action.type == CHANGE_BACKGROUND_CALENDAR) {
    return { ...state, changeBack: action.payload };
  }
  return state;
};
export default myReducer;
