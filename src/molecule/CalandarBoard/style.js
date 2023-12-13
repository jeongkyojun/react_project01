import styled, { css } from "styled-components";

export const StyledCalandarBoard = styled.div`
    display: flex;
    flex-direction: row;
    width: ${({width})=>width+'rem'||'3rem'};
    height: ${({height})=>height+'rem'||'2rem'};
    color: ${({day})=>day==0?'red':'white'};
    ${({isMonth})=>
        isMonth?
        css`
        border: 1px solid gray;
        @media(hover: hover) and (pointer: fine) {
            &:hover {
                border: 1px solid white;
                background-color: #333333;
                color: yellow;
                transition: all 0.1s;
                box-shadow: 1px 1px 1px rgb(0, 0, 0, 0.5);
            }
        }`:
        css`
            background-color: #333333;
        `
    }
    
`
