import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";

const activeClassName = "active";

export const Nav = styled.nav`
    background-color: ${({ theme }) => theme.colors.navigation.background};
    padding: 10px;
    display: grid;
    grid-template-columns: 1fr auto;
    justify-items: end;

    @media(max-width: ${({ theme }) => theme.breakpoints.maxMobileWidth}px){
        grid-template-columns: 1fr;
        justify-items: center;
    }
`;

export const Ul = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    list-style: none;
    padding: 0;
    margin: 0;
`;

export const Li = styled.li`
    padding: 10px 20px;
`;

export const StyledNavLink = styled(NavLink).attrs(() => ({
    activeClassName,
}))`
    &.${activeClassName} {
        font-weight: 700;
    }

    display: inline-block;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: ${({ theme }) => theme.colors.navigation.text}; 
    
    
    &::after {
        content: '';
        display: block;
        border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
        transform: scaleX(0);
        transition: transform 0.5s ease-in-out;
    }

    &:hover::after {
        transform: scaleX(1);
    }
`;

export const StyledNavLinkSpecial = styled(NavLink)`    
    padding: 10px;
    color: ${({ theme }) => theme.colors.navigation.text};
    border: 1px solid ${({ theme }) => theme.colors.navigation.text};
    border-radius: 2px;
    text-transform: lowercase;
    text-decoration: none;
    transition: 0.5s ease-in-out;

    &:hover {
        color: ${({ theme }) => theme.colors.primary};
        border: 1px solid ${({ theme }) => theme.colors.primary};
    }
`;