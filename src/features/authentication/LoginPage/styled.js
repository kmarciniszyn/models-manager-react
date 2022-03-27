import styled from "styled-components";

export const Wrapper = styled.main`
    position: relative;
    height: 100vh;
    width: 100vw;
`;

export const VideoWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: -1;
    opacity: 0.2;
`;

export const VideoContent = styled.video`
    height: 100%;
    width: 100%;
    object-fit: cover;
`;

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


