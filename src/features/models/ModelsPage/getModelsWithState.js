import axios from "axios";
import { serverURL, getModelStatePath } from "../../../paths";
import getModelsNamesArray from "./getModelsNamesArray";

const getModelState = async (modelFullName) =>
// the code commented below is for getting a model state using a connection to the api
/*axios.get(`${serverURL()}${getModelStatePath()}`, {
    nazwa_modelu: modelFullName
})
    .then(response => response)*/

// the code below is only added to demonstrate how the app works; models.json file is in public file
{
    const response = await fetch("/models.json");

    if (!response) {
        new Error(response.statusText);
    }

    const jsonObject = await response.json();
    const object = jsonObject.state;
    let index = await object.findIndex(item => item.name === modelFullName);
    let result = object[index];

    return result.state;
}

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