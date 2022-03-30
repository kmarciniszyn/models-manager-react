import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import ImageMainHeader from "../../../common/ImageMainHeader";
import Section from "../../../common/Section";
import { StyledMain } from "../../../common/StyledMain/styled";
import { selectModels, selectModelsLoadingStatus, fetchModels } from "../modelsSlice";
import Loading from "../Loading";
import ErrorBox from "../ErrorBox";
import { StyledSubmit } from "../../../common/StyledSubmit/styled";
import calculateFrauds from "./calculateFrauds";
import { Form, Label, Paragraph, RadioInput, Special, Wrapper } from "./styled";

export default () => {
    const dispatch = useDispatch();
    const models = useSelector(selectModels);
    const modelsLoadingStatus = useSelector(selectModelsLoadingStatus);
    const [checkedModel, setCheckedModel] = useState("");
    const [fraudProbability, setFraudProbability] = useState("");

    useEffect(() => {
        dispatch(fetchModels());
    }, [dispatch]);

    const onFormSubmit = async (event) => {
        event.preventDefault();

        const result = await calculateFrauds(checkedModel);
        /* if calculateFrauds catch error in 'result.description' 
        then result is 'Calculate failed. Try again later.'*/

        setFraudProbability(result.description);
    };

    return (
        <>
            <ImageMainHeader title={"Calculate frauds"} />
            <StyledMain>
                <Section
                    title={"Calculate fraud for model"}
                    body={
                        <Wrapper>
                            <Paragraph>Fraud probability: <Special>{fraudProbability}</Special></Paragraph>

                            <Paragraph>select the model and submit</Paragraph>
                            {
                                modelsLoadingStatus === "success"
                                    ? <Form onSubmit={onFormSubmit}>
                                        {
                                            models.map(model =>
                                                <Label key={nanoid()}>
                                                    <RadioInput
                                                        value={model.name}
                                                        name="selectedModel"
                                                        checked={checkedModel === model.name}
                                                        onChange={({ target }) => setCheckedModel(target.value)}
                                                    />
                                                    {model.name}
                                                </Label>
                                            )
                                        }
                                        <StyledSubmit value="submit" round />
                                    </Form>
                                    : modelsLoadingStatus === "loading"
                                        ? <Loading />
                                        : <ErrorBox text="error loading data" />
                            }
                        </Wrapper>
                    }
                />
            </StyledMain>
        </>
    );
}

