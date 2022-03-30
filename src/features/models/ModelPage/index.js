import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { nanoid } from "@reduxjs/toolkit";
import Section from "../../../common/Section";
import { StyledMain } from "../../../common/StyledMain/styled";
import { Li, ParamName, SpecialLi, SubUl, Ul, Wrapper } from "./styled";
import ImageMainHeader from "../../../common/ImageMainHeader";
import Loading from "../Loading";
import { exampleModelData } from "./exampleModelData";

export default () => {
    const { name } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState(null);

    // should be a function to get the model definition (e.g. by model name) and assign this information to a variable used in rendering

    useEffect(() => {

        // for example can get the model definition by model name ("name" from parameters in path)
        // display example information for model_example.yml
        setData(exampleModelData);

        // data display delay is only for demo
        setTimeout(() => {
            setIsLoading(false);
        }, 1500);
    }, []);

    // exampleModelData can be replaced by another model definition (js object)

    return (
        <>
            <ImageMainHeader title="Model details" />
            <StyledMain>
                {
                    isLoading
                        ? <Loading />
                        : <Section
                            title={data.nazwa}
                            body={
                                <Wrapper>
                                    <Ul>
                                        <SpecialLi>
                                            <ParamName>test fraction [frakcja_testowa]: </ParamName>
                                            {data.hiperparametry["frakcja_testowa"]}
                                        </SpecialLi>
                                        <SpecialLi>
                                            <ParamName>n.trees: </ParamName>
                                            {data.hiperparametry["n.trees"]}
                                        </SpecialLi>
                                        <SpecialLi>
                                            <ParamName>interaction.depth: </ParamName>
                                            {data.hiperparametry["interaction.depth"]}
                                        </SpecialLi>
                                        <SpecialLi>
                                            <ParamName>shrinkage: </ParamName>
                                            {data.hiperparametry["shrinkage"]}
                                        </SpecialLi>
                                        <SpecialLi>
                                            <ParamName>n.minobsinnode: </ParamName>
                                            {data.hiperparametry["n.minobsinnode"]}
                                        </SpecialLi>
                                        <SpecialLi>
                                            <ParamName>cv.folds: </ParamName>
                                            {data.hiperparametry["cv.folds"]}
                                        </SpecialLi>
                                        <SpecialLi>
                                            <ParamName>threshold: </ParamName>
                                            {data.hiperparametry["threshold"]}
                                        </SpecialLi>
                                        <SpecialLi>
                                            <ParamName>preprocesor: </ParamName>
                                            {data.preprocesor}
                                        </SpecialLi>
                                        <SpecialLi>
                                            <ParamName>postprocesor: </ParamName>
                                            {data.postprocesor}
                                        </SpecialLi>
                                        <SpecialLi>
                                            <ParamName>data set [zbior_danych]: </ParamName>
                                            {data.zbior_danych}
                                        </SpecialLi>

                                        <SpecialLi>
                                            <ParamName>features: </ParamName>
                                            <SubUl>
                                                {data.cechy.map(feature =>
                                                    <Li key={nanoid()}>
                                                        {feature}
                                                    </Li>
                                                )
                                                }
                                            </SubUl>
                                        </SpecialLi>

                                        <SpecialLi>
                                            <ParamName>all features: </ParamName>
                                            <SubUl>
                                                {data.cechy_all.map(feature =>
                                                    <Li key={nanoid()}>
                                                        {feature}
                                                    </Li>
                                                )
                                                }
                                            </SubUl>
                                        </SpecialLi>

                                    </Ul>
                                </Wrapper>
                            }
                        />}
            </StyledMain >
        </>
    )
};
