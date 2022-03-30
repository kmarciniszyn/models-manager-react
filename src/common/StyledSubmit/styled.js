import styled, { css } from "styled-components";

export const StyledSubmit = styled.input.attrs({
    type: 'submit'
})`
    cursor: pointer;
    background: ${({ theme }) => theme.colors.submit.gradient};
    color: ${({ theme }) => theme.colors.submit.text};
    padding: 10px;
    letter-spacing: 5px;
    text-transform: lowercase;
    transition: all 0.3s;

    border-top-left-radius: 20px;
    border-bottom-right-radius: 20px;
    border-bottom-left-radius: 2px;
    border-top-right-radius: 2px;
    border: none;

    &:hover {
        box-shadow: ${({ theme }) => theme.boxShadow.button.hover};
    }

    &:active {
        box-shadow: ${({ theme }) => theme.boxShadow.button.active};
    }

    ${({ round }) => round && css`
        border-radius: 20px;
    `}
  `;