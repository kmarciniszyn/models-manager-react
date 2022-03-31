import React, { useEffect } from "react";
import { toLogin } from "../../../routes";
import MainHeader from "../../../common/MainHeader";
import { Main, Paragraph, StyledLink, Wrapper } from "./styled";
import { StyledSection } from "../StyledSection/styled";
import { useFakeAuth } from "../../../fakeAuth";

export default () => {
    const auth = useFakeAuth(); // fake auth

    useEffect(() => {
        // fake logout
        auth.logout();
    }, []);

    return (
        <Main>
            <StyledSection>
                <Wrapper>
                    <MainHeader title={"logout"} />
                    <Paragraph>
                        You are logged out.
                    </Paragraph>
                    <StyledLink to={toLogin()}>
                        log in
                    </StyledLink>
                </Wrapper>
            </StyledSection>
        </Main>
    );
};