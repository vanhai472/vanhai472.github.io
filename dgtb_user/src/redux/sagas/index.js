import { fork, all } from "redux-saga/effects";
import auth from "./auth";
import rates from "./rates";
import masters from "./master";
import news from "./news";

const rootSaga = function* () {
	yield all([
		...auth.map((watcher) => fork(watcher)),
		...rates.map((watcher) => fork(watcher)),
		...masters.map((watcher) => fork(watcher)),
		...news.map((watcher) => fork(watcher)),
	]);
};

export default rootSaga;
