import styled from "styled-components";
import { ReactComponent as Icon } from "./user.svg";

export const UserIcon = styled(Icon)`
    color: ${({ theme }) => theme.colors.icon.login.text};
    height: 20px;

    @media(max-width: ${({ theme }) => theme.breakpoints.maxMobileWidth}px){
        height: 15px;
    }   
`;