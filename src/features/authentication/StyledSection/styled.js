import styled from "styled-components";

export const StyledSection = styled.section`
    background-color: ${({ theme }) => theme.colors.section.background};
    box-shadow: ${({ theme }) => theme.boxShadow.section};
    max-width: 600px;
    width: 100%;
    padding: 20px;
    margin: 0 auto;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    @media(max-width: ${({ theme }) => theme.breakpoints.maxMobileWidth}px){
        max-width: 300px;
    }
`;