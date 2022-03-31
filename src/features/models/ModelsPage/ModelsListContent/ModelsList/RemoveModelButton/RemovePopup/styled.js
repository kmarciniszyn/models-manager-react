import styled from "styled-components";
import { Button } from "../../../../../../../common/Button/styled";

export const ReverseColorsButton = styled(Button)`
    background-color: ${({ theme }) => theme.colors.button.text};
    color: ${({ theme }) => theme.colors.button.background};
    margin-left: 20px;
`;
