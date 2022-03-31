import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button } from "../../../../../common/Button/styled";

export const List = styled.ul`
    list-style: none;
    padding: 10px;
    margin: 0;
`;

export const ListItem = styled.li`
    display: grid;
    grid-template-columns: 3fr 2fr 1fr 1fr;
    grid-gap: 5px;
    align-items: center;
    border-bottom: 1px solid  ${({ theme }) => theme.colors.listItem.borderBottom};
    padding: 10px;
    margin-bottom: 10px;
    font-size: 16px;

    @media(max-width: ${({ theme }) => theme.breakpoints.maxMobileWidth}px){
        grid-template-columns: repeat(1, 1fr);
        grid-row-gap: 10px;
    }
`;

export const IconButton = styled(Button)`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Paragraph = styled.p`
    margin: 0;
`;

export const SpecialText = styled.span`
    display: block;
    text-transform: uppercase;
    font-size: 10px;
    font-weight: 700;
    margin-bottom: 10px;
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${({ theme }) => theme.colors.button.text};
    transition: filter 0.5s;

    &:hover {
        filter: brightness(120%);
    }
`;