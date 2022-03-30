import axios from "axios";
import { serverURL, addModelPath } from "../../../../paths";

const addModel = async (ymlFile) => {
    const formData = new FormData();
    formData.append("file", ymlFile);

    const url = `${serverURL}${addModelPath}`;

    // the code commented below is for adding a model using a connection to the api

    /*axios.post(url, formData, { headers: { "Content-Type": "multipart/form-data" } })
        .then(response => {
            if (response.status === 200) {
                return { description: `Adding successful. ${response}`, isAdded: true };
            } else if (response.status === 500) {
                return { description: `Add failed. ${response}`, isAdded: false };
            } else {
                return { description: response, isAdded: false };
            }
        })
        .catch(() => {
            return { description: "Add failed. Try again later.", isAdded: false }
        }); */


    // the code below is only added to demonstrate how the app works
    const response = { status: 200 };

    if (response.status === 200) {
        return { description: `Adding successful. OK`, isAdded: true };
    } else if (response.status === 500) {
        return { description: `Add failed. Internal Server Error`, isAdded: false };
    } else {
        return { description: "Default response", isAdded: false };
    }
};

export default addModel;