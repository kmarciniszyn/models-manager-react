import styled from "styled-components";
import bullet from "./bullet.svg"

export const Wrapper = styled.div`
    padding: 20px;
`;

export const Ul = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
`;

export const SubUl = styled.ul`
    list-style-type: disc;
`;

export const Li = styled.li`
    margin-bottom: 10px;
    font-size: 16px;

    &::marker {
        color: ${({ theme }) => theme.colors.primary};
    } 
`;

export const SpecialLi = styled.li`
    margin-bottom: 20px;
    font-size: 16px;

    &::before{
        content:"";
        display: block;
        height: 16px;
        width: 16px;
        float: left;
        margin-right: 5px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
        background-image: url(${bullet});
    }
`;

export const ParamName = styled.span`
    font-weight: 700;
`;
