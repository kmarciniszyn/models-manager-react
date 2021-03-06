import { createSlice } from "@reduxjs/toolkit";

const modelsSlice = createSlice({
    name: 'models',
    initialState: {
        models: [],
        report: null,
        modelsLoadingStatus: "initial",
        reportLoadingStatus: "initial",
        isUerLogin: false,
    },
    reducers: {
        fetchModels: state => {
            state.modelsLoadingStatus = "loading";
            state.models = null;
        },
        fetchModelsSuccess: (state, { payload: models }) => {
            state.modelsLoadingStatus = "success";
            state.models = models;
        },
        fetchModelsError: state => {
            state.modelsLoadingStatus = "error";
            state.models = null;
        },
        fetchReport: state => {
            state.reportLoadingStatus = "loading";
        },
        fetchReportSuccess: (state, { payload: report }) => {
            state.reportLoadingStatus = "success";
            state.report = report;
        },
        fetchReportError: state => {
            state.reportLoadingStatus = "error";
        },
        loginUser: state => {
            state.isUerLogin = true;
        },
        logoutUser: state => {
            state.isUerLogin = false;
        },
    }
});

const selectModelsState = state => state.models;

export const selectModels = state => selectModelsState(state).models;
export const selectModelsLoadingStatus = state => selectModelsState(state).modelsLoadingStatus;
export const selectReportLoadingStatus = state => selectModelsState(state).reportLoadingStatus;
export const selectReport = state => selectModelsState(state).report;
export const selectIsUserLogin = state => selectModelsState(state).isUerLogin;

export const {
    fetchModels,
    fetchModelsSuccess,
    fetchModelsError,
    fetchReport,
    fetchReportSuccess,
    fetchReportError,
    loginUser,
    logoutUser
} = modelsSlice.actions;

export default modelsSlice.reducer;