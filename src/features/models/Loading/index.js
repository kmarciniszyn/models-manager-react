import React from "react";
import { StyledSpinner, Wrapper } from "./styled";

export default () => (
    <Wrapper>
        Please wait, data are being loaded...
        <StyledSpinner />
    </Wrapper>
);