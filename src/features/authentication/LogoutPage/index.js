import React, { useEffect } from "react";
import { toLogin } from "../../../routes";
import MainHeader from "../../../common/MainHeader";
import { Main, Paragraph, StyledLink, Wrapper } from "./styled";
import { StyledSection } from "../StyledSection/styled";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../models/modelsSlice";

export default () => {
    const dispatch = useDispatch();

    useEffect(() => {
        // here should be code to logout


        dispatch(logoutUser());
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