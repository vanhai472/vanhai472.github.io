import {
	SAVE_ALL_MASTER_TREND,
	SAVE_ALL_MASTER_HOT,
	SAVE_ALL_MASTER_NEW,
	SAVE_ALL_MASTER_CATEGORY,
	SAVE_ALL_MASTER_SERVICE,
	SAVE_ALL_MASTER_LOCATION,
} from "../actions/constants";

const init = {
	masterAll: [],
	masterTrend: [],
	masterHot: [],
	masterGood: [],
	masterNew: [],
	masterNear: [],
	masterCategory: [],
	masterService: [],
	masterLocation: [],
	totalPagination: 0,
};

export default (state = init, { type, payload }) => {
	switch (type) {
		case SAVE_ALL_MASTER_TREND: {
			console.log(payload);
			return {
				...state,
				masterTrend: payload.results,
			};
		}
		case SAVE_ALL_MASTER_HOT: {
			return {
				...state,
				masterHot: payload.results,
			};
		}
		case SAVE_ALL_MASTER_NEW: {
			return {
				...state,
				masterNew: payload.results,
			};
		}
		case SAVE_ALL_MASTER_CATEGORY: {
			return {
				...state,
				masterCategory: payload.results,
			};
		}

		case SAVE_ALL_MASTER_SERVICE: {
			return {
				...state,
				masterService: payload.results,
			};
		}

		case SAVE_ALL_MASTER_LOCATION: {
			return {
				...state,
				masterLocation: payload.results,
			};
		}

		default:
			return state;
	}
};
