import axios from "axios";
import { serverURL, searchModelsPath } from "../../../paths";

const getModelsArray = async () =>
// the code commented below is for getting a models array (with models names) using a connection to the api

/* axios.post(`${serverURL()}${searchModelsPath}`)
    .then(response => response.json())*/


// the code below is only added to demonstrate how the app works; models.json file is in public file
{
    const response = await fetch("/models.json");

    if (!response) {
        new Error(response.statusText);
    }

    const jsonObject = await response.json();

    return jsonObject.models_list;
};

export default getModelsArray;