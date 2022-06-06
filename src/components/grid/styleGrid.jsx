import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Container = styled.div`
    display:flex;
    flex-direction: column;
    margin: 10px 0;

`

export const Row =styled.div`
    display: flex;
    flex-flow: row;
    // get the row by div and set its specifc border other than the default from styleBlock
    &:nth-child(4),
    &:nth-child(7),
    &:nth-child(1){
        div {
            border-top:solid 4px ${theme.colors.black}
        }
    }

    &:nth-child(9){
        div {
            border-bottom:solid 4px ${theme.colors.black}
        }
    }
    // choose rhe column by addresing the div in the row and threat it as a column
    div {
        &:nth-child(1),
        &:nth-child(7), &:nth-child(4) {
            border-left:solid 4px ${theme.colors.black}
        }
        &:nth-child(9){
            border-right:solid 4px ${theme.colors.black}
        }   
    }
`