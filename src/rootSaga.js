import { all } from "redux-saga/effects";
import { watchFetchModels, watchFetchReport } from "./features/models/modelsSaga";

export default function* rootSaga() {
    yield all([
        watchFetchModels(),
        watchFetchReport(),
    ]);
}