import styled from "styled-components";
import { ReactComponent as Icon } from "./attention.svg";

export const AttentionIcon = styled(Icon)`
    color: ${({ theme }) => theme.colors.icon.error};
    height: 50px;
`;