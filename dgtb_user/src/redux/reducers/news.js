import { SAVE_ALL_NEWS } from "../actions/constants";
const init = {
	allNews: [],
	totalPage: 0,
	totalData: 0,
};
export default (state = init, { type, payload }) => {
	switch (type) {
		case SAVE_ALL_NEWS: {
			return {
				...state,
				allNews: payload.news,
				totalPage: payload.totalPage,
				totalData: payload.totalPage * payload.quantity,
			};
		}
		default:
			return state;
	}
};
