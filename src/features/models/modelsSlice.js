import { createSlice } from "@reduxjs/toolkit";

const modelsSlice = createSlice({
    name: 'models',
    initialState: {
        models: [],
        modelsLoadingStatus: "initial",
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
    }
});

const selectModelsState = state => state.models;

export const selectModels = state => selectModelsState(state).models;
export const selectModelsLoadingStatus = state => selectModelsState(state).modelsLoadingStatus;

export const {
    fetchModels,
    fetchModelsSuccess,
    fetchModelsError,
} = modelsSlice.actions;

export default modelsSlice.reducer;