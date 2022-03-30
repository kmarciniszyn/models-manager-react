import styled from "styled-components";

export const Wrapper = styled.div`
    padding: 20px;
`;

export const Special = styled.span`
    font-weight: 700;
    border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
`;

export const Paragraph = styled.p`
    text-transform: uppercase;
    font-size: 16px;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

export const Label = styled.label`
    margin-bottom: 20px;
    font-size: 16px;
    display: flex;
    align-items: center;
`;

export const RadioInput = styled.input.attrs({
    type: 'radio'
})`
    appearance: none;
    background-color: ${({ theme }) => theme.colors.input.radio.background};
    margin: 0 5px 0 0;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    display: grid;
    place-content: center;

    &:hover {
        background-color: ${({ theme }) => theme.colors.input.radio.backgroundHover};
    }

    &::before {
        content: "";
        width: 10px;
        height: 10px;
        border-radius: 50%;
        transform: scale(0);
        background-color: ${({ theme }) => theme.colors.primary};
    }

    &:checked::before {
        transform: scale(1);
    }

    &:focus {
        outline: 1px solid ${({ theme }) => theme.colors.primary};
        outline-offset: 2px;
    }
`;
