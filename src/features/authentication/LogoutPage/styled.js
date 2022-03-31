import styled from "styled-components";
import { Link } from "react-router-dom";
import background from "./background.png";

export const Main = styled.main`
    position: absolute;
    height: 100vh;
    width: 100vw;
    background-image: linear-gradient(to right bottom,
        rgba(2, 97, 199, 0.5),
        rgba(43, 255, 234, 0.5)),
        url(${background});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Paragraph = styled.p`
    margin: 0;
`;

export const StyledLink = styled(Link)`
    margin: 20px 0;
    color: ${({ theme }) => theme.colors.primary};
    transition: all 0.3s;

    &:hover {
        filter: brightness(110%);
        transform: scale(1.1);
    }
`;