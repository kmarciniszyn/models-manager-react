export const serverURL = () => "/model-service/api/v1"; // here should be the full api url 
export const addModelPath = () => "/dodaj_model";
export const removeModelPath = () => "/usun_model";
export const searchModelsPath = () => "/wyszukaj_modele";
export const getModelStatePath = () => "/pobierz_stan_modelu";
export const loadReportPath = (modelName) => `/pobierz_raport/${modelName}.html`;
export const cauntFraudsPath = () => "/oblicz_fraudy";