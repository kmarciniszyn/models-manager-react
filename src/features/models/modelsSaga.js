import { call, delay, put, takeLatest } from "redux-saga/effects";
import {
    fetchModels,
    fetchModelsSuccess,
    fetchModelsError,
    fetchReportSuccess,
    fetchReportError,
    fetchReport
} from './modelsSlice';
import getModelsWithState from "./ModelsPage/getModelsWithState";
import loadModelReport from "./ReportPage/loadModelReport";

function* fetchModelsHandler() {
    try {
        yield delay(1500); // only for demo
        const models = yield call(getModelsWithState);
        yield put(fetchModelsSuccess(models));

    } catch (error) {
        yield put(fetchModelsError());
    }
}

export function* watchFetchModels() {
    yield takeLatest(fetchModels.type, fetchModelsHandler);
}

function* fetchReportHandler(action) {
    try {
        yield delay(1500); // only for demo
        const modelName = action.payload;
        const report = yield call(loadModelReport, modelName);
        yield put(fetchReportSuccess(report));

    } catch (error) {
        yield put(fetchReportError());
    }
}

export function* watchFetchReport() {
    yield takeLatest(fetchReport.type, fetchReportHandler);
}
