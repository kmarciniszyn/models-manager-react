import styled from "styled-components";

export const Button = styled.button`
    cursor: pointer;
    display: inline-block;
    background-color: ${({theme}) => theme.colors.button.background};
    color: ${({theme}) => theme.colors.button.text};
    padding: 10px;
    border-radius: 50px;
    border: none;
    transition: all 0.3s;

    &:hover {
        box-shadow: ${({theme}) => theme.boxShadow.button.hover};
    }

    &:active {
        box-shadow: ${({theme}) => theme.boxShadow.button.active};
    }
`;