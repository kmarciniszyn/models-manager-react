import { all } from "redux-saga/effects";
import { watchFetchModels } from "./features/models/modelsSaga";

export default function* rootSaga() {
    yield all([
        watchFetchModels(),
    ]);
}