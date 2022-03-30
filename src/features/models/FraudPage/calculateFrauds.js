import axios from "axios";
import { calculateFraudsPath, serverURL } from "../../../paths";

const calculateFrauds = async (modelName) => {
    // the code below is only added to demonstrate how the app works; models.json file is in public file
    return { description: Math.random(0, 1).toFixed(4) };

    // the code below is for getting a fraud probability (for model) using a connection to the api
    axios.post(`${serverURL()}${calculateFraudsPath()}`, {
        model: modelName
    })
        .then(response => {
            return { description: response };
        })
        .catch(() => {
            return { description: "Calculate failed. Try again later." };
        });
};

export default calculateFrauds;