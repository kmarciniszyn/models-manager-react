import axios from "axios";
import { serverURL, loadReportPath } from "../../../paths";
import report from "./report.txt";

const loadModelReport = async (modelName) => {

    // the code below is only added to demonstrate how the app works
    const response = await fetch(report);
    const responseText = await response.text();
    return responseText;

    // the code below is for getting a model report using a connection to the api
    axios.get(`${serverURL()}${loadReportPath(modelName)}`)
        .then(response => {
            return response.text();
        })
};

export default loadModelReport;