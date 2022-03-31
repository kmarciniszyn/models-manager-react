import React from "react";
import { toCalculateFrauds, toLogout, toModels } from "../routes";
import { Li, Nav, StyledNavLink, Ul, StyledNavLinkSpecial } from "./styled";

export default () => (
    <Nav>
        <Ul>
            <Li>
                <StyledNavLink to={toModels()}>Models</StyledNavLink>
            </Li>
            <Li>
                <StyledNavLink to={toCalculateFrauds()}>Calculate frauds</StyledNavLink>
            </Li>
        </Ul>
        <StyledNavLinkSpecial to={toLogout()} logout="true">Log out</StyledNavLinkSpecial>
    </Nav>
);