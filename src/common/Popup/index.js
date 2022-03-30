import React from "react";
import { CloseButton, Content, Text, Title, Wrapper } from "./styled";

export default ({ title, text, isVisible, onClose }) => (
    <Wrapper isVisible={isVisible}>
        <Content isVisible={isVisible}>
            <Title>
                {title}
            </Title>
            <Text>
                {text}
            </Text>
            <CloseButton onClick={() => onClose()}>
                OK
            </CloseButton>
        </Content>
    </Wrapper>
);