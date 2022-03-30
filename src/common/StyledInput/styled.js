import styled from "styled-components";

export const StyledInput = styled.input`
    padding: 10px;
    border: none;
    border-radius: 2px;
    border-bottom: 2px solid ${({ theme }) => theme.colors.input.borderBottom};

    &::placeholder {
        color: ${({ theme }) => theme.colors.input.placeholder};
    }

    &:focus {
        outline: none;
        border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
        box-shadow: ${({ theme }) => theme.boxShadow.input.focus};
    }

    &:focus:invalid {
        outline: none;
        border-bottom: 2px solid ${({ theme }) => theme.colors.input.invalid};
    }
`;