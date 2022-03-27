import styled from "styled-components";
import { ReactComponent as Icon } from "./padlock.svg";

export const PadlockIcon = styled(Icon)`
    color: ${({ theme }) => theme.colors.icon.login.text};
    height: 20px;

    @media(max-width: ${({ theme }) => theme.breakpoints.maxMobileWidth}px){
        height: 15px;
    }   
`;