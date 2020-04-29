import { takeLatest, all } from "redux-saga/effects";

import news from "../api/news";

import { createRequestSaga } from "./common";

import { GET_ALL_NEWS, SAVE_ALL_NEWS } from "../actions/constants";

const getAllNews = createRequestSaga({
	request: news.getAllNews,
	key: "getAllRateOption",
	success: [(res) => ({ type: SAVE_ALL_NEWS, payload: res.data })],
});

export default [
	function* fetchWatcher() {
		yield all([takeLatest(GET_ALL_NEWS, getAllNews)]);
	},
];
