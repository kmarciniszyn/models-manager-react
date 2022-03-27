import styled from "styled-components";

export const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 10px;
    align-items: center;
    margin-bottom: 20px;
`;

export const Input = styled.input`
    margin: 0 15px;
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

export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Label = styled.label`
    font-size: 10px;
    color: ${({ theme }) => theme.colors.input.placeholder};
    margin-left: 25px;
    margin-top: 5px;
    display: block;
    transition: all 0.3s;

    ${Input}:placeholder-shown + && {
        opacity: 0;
        visibility: hidden;
        transform: translateY(-30px);
    }
`;

export const Submit = styled.input`
    cursor: pointer;
    background: ${({ theme }) => theme.colors.submit.gradient};
    color: ${({ theme }) => theme.colors.submit.text};
    padding: 10px;
    margin: 15px;
    letter-spacing: 5px;
    text-transform: lowercase;

    border-top-left-radius: 20px;
    border-bottom-right-radius: 20px;
    border-bottom-left-radius: 2px;
    border-top-right-radius: 2px;
    border: none;

    transition: all 0.3s;

    &:hover {
        box-shadow: ${({ theme }) => theme.boxShadow.button.hover};
    }

    &:active {
        box-shadow: ${({ theme }) => theme.boxShadow.button.active};
    }
`;