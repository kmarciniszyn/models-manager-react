import styled, { css } from "styled-components";

export const Wrapper = styled.div`
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    background-color: ${({ theme }) => theme.colors.popup.background};
    z-index: 999;

    display: flex;
    align-items: center;
    justify-content: center;

    opacity: 0;
    visibility: hidden;
    transition: all 0.3s;

    ${({ isVisible }) => isVisible && css`
        opacity: 1;
        visibility: visible;
    `}
`;

export const Content = styled.div`
    padding: 20px;
    background-color: ${({ theme }) => theme.colors.popup.boxBackground};
    width: 50vw;
    box-shadow: ${({ theme }) => theme.boxShadow.section};
    transform: scale(0.25);
    opacity: 0;
    transition: all 0.5s 0.3s;

    display: flex;
    flex-direction: column;
    align-items: center;

    ${({ isVisible }) => isVisible && css`
        transform: scale(1);
        opacity: 1;
    `}
`;

export const Title = styled.h2`
    margin: 0;
    text-transform: uppercase;
    letter-spacing: 2px;
`;

export const Text = styled.p`
    margin: 20px 0;
`;

export const CloseButton = styled.button`
    cursor: pointer;
    background: ${({ theme }) => theme.colors.popup.button.background};
    color: ${({ theme }) => theme.colors.popup.button.text};
    padding: 10px 30px;
    letter-spacing: 5px;
    text-transform: lowercase;
    border-radius: 20px;
    border: none;
    transition: all 0.3s;

    &:hover {
        box-shadow: ${({ theme }) => theme.boxShadow.button.hover};
    }

    &:active {
        box-shadow: ${({ theme }) => theme.boxShadow.button.active};
    }
`;