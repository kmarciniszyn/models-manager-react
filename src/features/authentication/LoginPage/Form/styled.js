import styled from "styled-components";
import { StyledInput } from "../../../../common/StyledInput/styled";
import { StyledSubmit } from "../../../../common/StyledSubmit/styled";

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

export const Input = styled(StyledInput)`
    margin: 0 15px;
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

export const Submit = styled(StyledSubmit)`
    margin: 15px;
`;