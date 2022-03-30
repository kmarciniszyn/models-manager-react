import styled from 'styled-components';
import { keyframes } from 'styled-components';
import { ReactComponent as Spinner } from './spinner.svg';

const rotate = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

export const StyledSpinner = styled(Spinner)`
    width: 100px;
    height: 100px; 
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    animation-name: ${rotate};
    margin-top: 20px;

    @media (max-width: ${({ theme }) => theme.breakpoints.maxMobileWidth}px){
        width: 60px;
        height: 60px;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${({ theme }) => theme.colors.textPrimary};
    font-size: 16px;
    padding: 30px;

    @media (max-width: ${({ theme }) => theme.breakpoints.maxMobileWidth}px){  
        font-size: 12px;
    }
`;
