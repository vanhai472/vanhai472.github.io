import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import UiReducer from "./ui";
import userReducer from "./user";
import authReducer from "./auth";

const rootReducer = history =>
  combineReducers({
    // Define reducers
    user: userReducer,
    ui: UiReducer,
    auth: authReducer,
    router: connectRouter(history)
  });

export default rootReducer;
