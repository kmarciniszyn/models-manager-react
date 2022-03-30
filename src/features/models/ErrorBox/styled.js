import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 16px;
    padding: 30px;

    @media (max-width: ${({ theme }) => theme.breakpoints.maxMobileWidth}px){  
        font-size: 12px;
    }
`;