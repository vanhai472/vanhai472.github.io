import {
	GET_ALL_MASTER_OPTION,
	GET_ALL_MASTER_TREND,
	GET_ALL_MASTER_HOT,
	GET_ALL_MASTER_NEW,
	GET_ALL_MASTER_CATEGORY,
	GET_ALL_MASTER_SERVICE,
	GET_ALL_MASTER_LOCATION,
} from "./constants";

export const getAllMasterOption = (...args) => ({
	type: GET_ALL_MASTER_OPTION,
	args,
});

export const getAllMasterTrend = (...args) => ({
	type: GET_ALL_MASTER_TREND,
	args,
});

export const getAllMasterHot = (...args) => ({
	type: GET_ALL_MASTER_HOT,
	args,
});

export const getAllMasterNew = (...args) => ({
	type: GET_ALL_MASTER_NEW,
	args,
});

export const getAllMasterCategory = (...args) => ({
	type: GET_ALL_MASTER_CATEGORY,
	args,
});

export const getAllMasterService = (...args) => ({
	type: GET_ALL_MASTER_SERVICE,
	args,
});

export const getAllMasterLocation = (...args) => ({
	type: GET_ALL_MASTER_LOCATION,
	args,
});
