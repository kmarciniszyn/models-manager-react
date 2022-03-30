import React from "react";
import { AttentionIcon } from "./AttentionIcon/styled";
import { Wrapper } from "./styled";

export default ({ text }) => (
    <Wrapper>
        <AttentionIcon />
        <p>{text}</p>
    </Wrapper>
);