import {
	TOGGLE_ALL,
	COLLPSE_CHANGE,
	TOGGLE_MODAL_REGISTER,
	TOGGLE_MODAL_LOGIN,
} from "../actions/constants";

const initState = {
	collapsed: false,
	visibleSideBar: false,
	visibleLogin: false,
	visibleRegister: false,
};

export default function appReducer(state = initState, action) {
	switch (action.type) {
		case COLLPSE_CHANGE:
			return { ...state, collapsed: !state.collapsed };

		case TOGGLE_ALL:
			if (state.view !== action.view || action.height !== state.height) {
				return {
					...state,
					view: action.view,
					collapsed: false,
				};
			}
			break;
		case TOGGLE_MODAL_LOGIN:
			return {
				...state,
				visibleLogin: !state.visibleLogin,
			};
		case TOGGLE_MODAL_REGISTER:
			return {
				...state,
				visibleRegister: !state.visibleRegister,
			};
		default:
			return state;
	}
}
