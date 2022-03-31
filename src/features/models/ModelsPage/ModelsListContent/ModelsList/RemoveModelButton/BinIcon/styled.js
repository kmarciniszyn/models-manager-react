import styled from "styled-components";
import { ReactComponent as Icon } from "./bin.svg";

export const BinIcon = styled(Icon)`
    color: ${({ theme }) => theme.colors.textPrimary};
    height: 20px;

    @media(max-width: ${({ theme }) => theme.breakpoints.maxMobileWidth}px){
        height: 15px;
    }   
`;