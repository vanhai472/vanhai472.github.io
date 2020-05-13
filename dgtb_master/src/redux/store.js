import { createStore, combineReducers, applyMiddleware } from "redux";
import reducers from "./reducers";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";

import { composeWithDevTools } from "redux-devtools-extension";
import { createBrowserHistory } from "history";
import { routerMiddleware, connectRouter } from "connected-react-router";

const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();

const routeMiddleware = routerMiddleware(history);

const middlewares = [sagaMiddleware, routeMiddleware];

const allReducer = combineReducers({
    ...reducers,
    router: connectRouter(history),
});

const store = createStore(
    allReducer,
    composeWithDevTools(applyMiddleware(...middlewares))
);

sagaMiddleware.run(rootSaga);

export { store, history };
