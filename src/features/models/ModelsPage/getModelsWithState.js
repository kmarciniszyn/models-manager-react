import axios from "axios";
import { serverURL, getModelStatePath } from "../../../paths";
import getModelsNamesArray from "./getModelsNamesArray";

const getModelState = async (modelFullName) =>
    axios.get(`${serverURL()}${getModelStatePath()}`, {
        nazwa_modelu: modelFullName
    })
        .then(response => response.data)

const getModelsWithState = async () => {
    const modelsNamesArray = await getModelsNamesArray();
    const models = [];

    for (const index in modelsNamesArray) {
        const modelName = modelsNamesArray[index];
        models.push({
            name: modelName,
            state: await getModelState(modelName),
        })
    }

    return models;
}

export default getModelsWithState;