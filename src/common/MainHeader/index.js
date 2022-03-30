import React from "react";
import { StyledH1 } from "../StyledH1/styled";
import { Header } from "./styled";

export default ({ title }) => (
    <Header>
        <StyledH1>{title}</StyledH1>
    </Header>
);