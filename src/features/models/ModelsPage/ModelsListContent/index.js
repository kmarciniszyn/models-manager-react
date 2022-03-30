import React from "react";
import ErrorBox from "../../ErrorBox";
import Loading from "../../Loading";
import ModelsList from "./ModelsList";

export default ({ modelsLoadingStatus, models }) => {

    switch (modelsLoadingStatus) {
        case "initial":
            return null;

        case "success":
            return <ModelsList models={models} />;

        case "loading":
            return <Loading />;

        case "error":
            return <ErrorBox text={"error loading data"} />;

        default:
            return <ErrorBox text={"unexpected error"} />;
    }
};