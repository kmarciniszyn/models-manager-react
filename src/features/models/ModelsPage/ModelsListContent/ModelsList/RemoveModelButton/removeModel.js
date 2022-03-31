import axios from "axios";
import { serverURL, removeModelPath } from "../../../../../../paths";

const removeModel = async (modelFullName) => {

    // the code below is only added to demonstrate how the app works
    return { description: "model state: corrupted" };

    // the code below is for removing a model using a connection to the api
    axios.delete(`${serverURL()}${removeModelPath()}`, {
        nazwa_modelu: modelFullName
    })
        .then(response => {
            return { description: response };
        })
        .catch(() => {
            return { description: "Remove failed. Try again later." };
        });
};

export default removeModel;