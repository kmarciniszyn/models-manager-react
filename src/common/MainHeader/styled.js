import styled from "styled-components";

export const Header = styled.header`
    text-align: center;
`;

export const Title = styled.h1`
    font-size: 40px;
    padding: 0 20px;
    letter-spacing: 15px;
    text-transform: uppercase;

    @media(max-width: ${({theme}) => theme.breakpoints.maxMobileWidth}px){
        font-size: 30px;
    }
`;