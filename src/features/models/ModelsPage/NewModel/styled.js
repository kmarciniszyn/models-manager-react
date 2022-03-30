import styled from "styled-components";

export const Form = styled.form`
    display: grid;
    grid-template-columns: 1fr 5fr 1fr;
    grid-gap: 10px;
    align-items: center;
    padding: 10px;

    @media(max-width: ${({ theme }) => theme.breakpoints.maxMobileWidth}px){  
        grid-template-columns: 1fr;
    }
`;

export const Label = styled.label`
    padding: 0 10px;
`;
