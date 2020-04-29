import { createStore, combineReducers, applyMiddleware } from "redux";
import reducers from "./reducers";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";

import { composeWithDevTools } from "redux-devtools-extension";
import { createBrowserHistory } from "history";
import { routerMiddleware, connectRouter } from "connected-react-router";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "Booking Plaftform",
  storage,
  blacklist: [
    "request",
    "User",
    "Master",
    "news",
    "Comment",
    "Complaint",
    "Rates",
    "Schedule",
    "FAQ",
    "Recommend",
    "Setting",
    "Category",
    "ImageLocation"
  ]
};

const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();

const routeMiddleware = routerMiddleware(history);

const middlewares = [sagaMiddleware, routeMiddleware];

const allReducer = combineReducers({
  ...reducers,
  router: connectRouter(history)
});

const persistedReducer = persistReducer(persistConfig, allReducer);

const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, history };
