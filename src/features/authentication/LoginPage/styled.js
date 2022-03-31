import styled from "styled-components";

export const Wrapper = styled.main`
    position: relative;
    height: calc(100vh - 60.4px);
    width: 100%;
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
