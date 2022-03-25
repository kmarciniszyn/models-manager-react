import { call, put, takeLatest } from "redux-saga/effects";
import { fetchModels, fetchModelsSuccess, fetchModelsError } from './modelsSlice';
import getModelsWithState from "./ModelsPage/getModelsWithState";

function* fetchModelsHandler() {
    try {
        const models = yield call(getModelsWithState);
        yield put(fetchModelsSuccess(models));

    } catch (error) {
        yield put(fetchModelsError());
    }
}

export function* watchFetchModels() {
    yield takeLatest(fetchModels.type, fetchModelsHandler);
}
