import styled from "styled-components";
import { ReactComponent as Icon } from "./report.svg";

export const ReportIcon = styled(Icon)`
    color: ${({ theme }) => theme.colors.textPrimary};
    height: 20px;

    @media(max-width: ${({ theme }) => theme.breakpoints.maxMobileWidth}px){
        height: 15px;
    }   
`;