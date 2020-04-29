import App from "./app";
import Auth from "./auth";
import Rate from "./rates";
import Master from "./master";
import News from "./news";
import masterReducer from "./masterReducer";

import { combineReducers } from "redux";
export default combineReducers({
	App,
	Auth,
	Rate,
	Master,
	News,
	masterReducer,
});
