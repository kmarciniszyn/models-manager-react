import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { StyledMain } from "../../../common/StyledMain/styled";
import ImageMainHeader from "../../../common/ImageMainHeader";
import { fetchModels, selectModels, selectModelsLoadingStatus } from "../modelsSlice";
import Section from "../../../common/Section";
import NewModel from "./NewModel";
import ModelsListContent from "./ModelsListContent";

export default () => {
    const dispatch = useDispatch();
    const models = useSelector(selectModels);
    const modelsLoadingStatus = useSelector(selectModelsLoadingStatus);

    useEffect(() => {
        dispatch(fetchModels());
    }, [dispatch]);

    return (
        <>
            <ImageMainHeader title={"Models"} />
            <StyledMain>
                <Section
                    title={"Add model"}
                    body={
                        <NewModel />
                    }
                />
                <Section
                    title={"Models list"}
                    body={
                        <ModelsListContent
                            models={models}
                            modelsLoadingStatus={modelsLoadingStatus}
                        />
                    }
                />
            </StyledMain>
        </>
    );
}