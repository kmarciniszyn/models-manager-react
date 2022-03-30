import styled from "styled-components";

export const Wrapper = styled.div`
    float: left;
`;

export const DownloadButton = styled.a`
    background-color: ${({ theme }) => theme.colors.button.background};
    color: ${({ theme }) => theme.colors.button.text};
    padding: 10px;
    margin: 20px 15px;
    border-radius: 50px;
    border: none;
    transition: all 0.3s;
    float: right;
    display: flex;
    align-items: center;

    &:hover {
        box-shadow: ${({ theme }) => theme.boxShadow.button.hover};
    }

    &:active {
        box-shadow: ${({ theme }) => theme.boxShadow.button.active};
    }
`;