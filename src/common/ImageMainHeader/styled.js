import styled from "styled-components";
import { StyledH1 } from "../StyledH1/styled";
import background from "./background.png";

export const Header = styled.header`
    height: 30vh;
    margin-bottom: 30px;

    background-image: linear-gradient(to right bottom,
        rgba(2, 97, 199, 0.5),
        rgba(43, 255, 234, 0.5)),
        url(${background});
    background-size: cover;
    background-position: top;
    
    display: flex;
    justify-content: center;
    align-items: center;

    clip-path: polygon(0 0, 100% 0, 100% 25vh, 0 100%);
`;

export const Title = styled(StyledH1)`
    color: ${({ theme }) => theme.colors.header.text};
`;