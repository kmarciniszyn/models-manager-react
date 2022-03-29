import React from "react";
import { Section, Header, Title } from "./styled";

export default ({ title, body }) => (
    <Section>
        <Header>
            <Title>{title}</Title>
        </Header>
        {body}
    </Section>
);