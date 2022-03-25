import axios from "axios";
import { serverURL, searchModelsPath } from "../../../paths";

const getModelsArray = async () =>
    axios.post(`${serverURL()}${searchModelsPath}`)
        .then(response => response.data)

export default getModelsArray;