import React from "react";
import { ReverseColorsButton } from "./styled";
import { Content, Text, Title, Wrapper } from "../../../../../../../common/Popup/styled";
import { Button } from "../../../../../../../common/Button/styled";

export default ({ title, text, isVisible, onCancel, onOk }) => (
    <Wrapper isVisible={isVisible}>
        <Content isVisible={isVisible}>
            <Title>
                {title}
            </Title>
            <Text>
                {text}
            </Text>
            <div>
                <Button onClick={() => onOk()}>
                    OK
                </Button>
                <ReverseColorsButton onClick={() => onCancel()}>
                    cancel
                </ReverseColorsButton>
            </div>
        </Content>
    </Wrapper>
);