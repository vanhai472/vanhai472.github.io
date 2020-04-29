import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { createLogger } from "redux-logger";
import rootReducer from "./reducers";
import rootSaga from "./sagas";

const sagaMiddleWare = createSagaMiddleware();

const loggerMiddleware = createLogger({
	predicate: () =>
		process.env.NODE_ENV === "development" && typeof window !== "undefined",
});

const bindMiddleware = (middleware) => {
	if (process.env.NODE_ENV !== "production") {
		const { composeWithDevTools } = require("redux-devtools-extension");
		return composeWithDevTools(applyMiddleware(...middleware));
	}

	return applyMiddleware(...middleware);
};

const makeConfiguredStore = (reducer, initialState) => {
	return createStore(
		reducer,
		initialState,
		bindMiddleware([sagaMiddleWare, loggerMiddleware])
	);
};

let getStore = null;

export const makeStore = (initialState, { isServer, req, debug, storeKey }) => {
	if (isServer) {
		console.log("object");
		initialState = initialState || { fromServer: "foo" };
		return makeConfiguredStore(rootReducer, initialState);
	} else {
		const store = makeConfiguredStore(rootReducer, initialState);
		store.runSagaTask = () => {
			store.sagaTask = sagaMiddleWare.run(rootSaga);
		};
		store.runSagaTask();
		getStore = store;
		return store;
	}
};

export { getStore };
