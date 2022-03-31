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
