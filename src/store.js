import { configureStore } from "@reduxjs/toolkit";
import modelsReducer from "./features/models/modelsSlice";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";

const sagaModdleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        models: modelsReducer,
    },
    middleware: [sagaModdleware],
});

sagaModdleware.run(rootSaga);

export default store;