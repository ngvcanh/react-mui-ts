import { configureStore, Middleware } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import createSagaMiddleware from "@redux-saga/core";
import reducer from "./reducer";
import rootSaga from "./saga";

const sagaMiddleware = createSagaMiddleware();
const middlewares: Middleware[] = [ sagaMiddleware ];
const logger = createLogger({ diff: true });

if (process.env.NODE_ENV !== "production") {
  middlewares.push(logger);
}

const store = configureStore({
  reducer,
  middleware: (gd) => gd().concat(...middlewares)
});

sagaMiddleware.run(rootSaga);

export default store;