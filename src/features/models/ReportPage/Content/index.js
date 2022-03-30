import React from "react";
import Report from "./Report";
import Loading from "../../Loading";
import ErrorBox from "../../ErrorBox";

export default ({ reportLoadingStatus, report }) => {

    switch (reportLoadingStatus) {
        case "initial":
            return null;

        case "success":
            const myFile = new File([report], 'report.html', {
                type: "text/plain",
            });

            const url = URL.createObjectURL(myFile);

            return <Report report={report} urlToDownload={url} />;

        case "loading":
            return <Loading />;

        case "error":
            return <ErrorBox text="error loading report" />;

        default:
            return <ErrorBox text="unexpected error" />;
    }
};