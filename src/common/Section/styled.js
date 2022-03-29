import styled from "styled-components";

export const Section = styled.section`
    background-color: ${({ theme }) => theme.colors.section.background};
    box-shadow: ${({ theme }) => theme.boxShadow.section};
    margin-bottom: 30px;

    @media(max-width: ${({ theme }) => theme.breakpoints.maxMobileWidth}px){
        margin-bottom: 10px;
    }
`;

export const Header = styled.header`
    padding: 20px;
    border-bottom: 2px solid  ${({ theme }) => theme.colors.section.borderBottom};
`;

export const Title = styled.h2`
    font-size: 24px;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin: 0;

    @media(max-width: ${({ theme }) => theme.breakpoints.maxMobileWidth}px){
        font-size: 16px;
    }
`;