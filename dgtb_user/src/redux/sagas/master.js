import { takeLatest, all } from "redux-saga/effects";

import master from "../api/master";

import { createRequestSaga } from "./common";

import {
	GET_ALL_MASTER_TREND,
	SAVE_ALL_MASTER_TREND,
	GET_ALL_MASTER_HOT,
	SAVE_ALL_MASTER_HOT,
	GET_ALL_MASTER_NEW,
	SAVE_ALL_MASTER_NEW,
	GET_ALL_MASTER_CATEGORY,
	SAVE_ALL_MASTER_CATEGORY,
	GET_ALL_MASTER_SERVICE,
	SAVE_ALL_MASTER_SERVICE,
	GET_ALL_MASTER_LOCATION,
	SAVE_ALL_MASTER_LOCATION,
} from "../actions/constants";

const getAllMasterTrend = createRequestSaga({
	request: master.getAllMasterOption,
	key: "getAllMasterTrend",
	success: [(res) => ({ type: SAVE_ALL_MASTER_TREND, payload: res.data })],
});

const getAllMasterHot = createRequestSaga({
	request: master.getAllMasterOption,
	key: "getAllMasterHot",
	success: [(res) => ({ type: SAVE_ALL_MASTER_HOT, payload: res.data })],
});

const getAllMasterNew = createRequestSaga({
	request: master.getAllMasterOption,
	key: "getAllMasterHot",
	success: [(res) => ({ type: SAVE_ALL_MASTER_NEW, payload: res.data })],
});

const getAllMasterCategory = createRequestSaga({
	request: master.getAllMasterCategory,
	key: "getAllMasterCategory",
	success: [(res) => ({ type: SAVE_ALL_MASTER_CATEGORY, payload: res.data })],
});

const getAllMasterService = createRequestSaga({
	request: master.getAllMasterService,
	key: "getAllMasterService",
	success: [(res) => ({ type: SAVE_ALL_MASTER_SERVICE, payload: res.data })],
});

const getAllMasterLocation = createRequestSaga({
	request: master.getAllMasterLocation,
	key: "getAllMasterLocation",
	success: [(res) => ({ type: SAVE_ALL_MASTER_LOCATION, payload: res.data })],
});

export default [
	function* fetchWatcher() {
		yield all([
			takeLatest(GET_ALL_MASTER_TREND, getAllMasterTrend),
			takeLatest(GET_ALL_MASTER_HOT, getAllMasterHot),
			takeLatest(GET_ALL_MASTER_NEW, getAllMasterNew),
			takeLatest(GET_ALL_MASTER_CATEGORY, getAllMasterCategory),
			takeLatest(GET_ALL_MASTER_SERVICE, getAllMasterService),
			takeLatest(GET_ALL_MASTER_LOCATION, getAllMasterLocation),
		]);
	},
];
