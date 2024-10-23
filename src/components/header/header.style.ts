import styled from "styled-components";
import { Colors } from "../../assets/styles/theme";

export const HeaderContainer = styled.div`
    width: 100%;
    background-color: #212529;
    display: flex;
    justify-content: space-between;
    padding: 20px;
    color: ${Colors.text.white};
`;

export const HeaderTitle = styled.h2`
    font-weight: bold;
    font-size: 1.5rem;
    cursor: pointer;
`;

export const HeaderItems = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const HeaderItem = styled.div`
    font-weight: 600;
    font-size: 1rem;
    display: flex;
    align-items: center;

    span{
        margin-right: 5px;
    }

    &:nth-child(1),
    &:nth-child(2),
    &:nth-child(3){
        margin-right: 40px;
    }

    &:nth-child(5){
        margin-left: 40px;
    }

    &:hover{
        cursor: pointer;
    }
`;

