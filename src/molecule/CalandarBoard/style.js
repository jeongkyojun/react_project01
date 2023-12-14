import styled, { css } from "styled-components";

export const StyledCalandarBoard = styled.div`
    ${({isToday,width,height,day})=>
        isToday?
        css`
        background-color: white;
        border: 1px solid green;
        display: flex;
        flex-direction: row;
        width: ${width+'rem'||'3rem'};
        height: ${height+'rem'||'2rem'};
        color: ${day===0?'red':'black'};
        `:
        css`
        border: 1px solid gray;
        display: flex;
        flex-direction: row;
        width: ${width+'rem'||'3rem'};
        height: ${height+'rem'||'2rem'};
        color: ${({day})=>day===0?'red':'white'};
        `
    }

    ${({isMonth, isToday})=>
        isMonth?
        css`
        @media(hover: hover) and (pointer: fine) {
            &:hover {
                border: 1px solid white;
                background-color: ${isToday?'#cbcbcb':'#333333'};
                color: ${isToday?'none':'yellow'};
                transition: all 0.1s;
                box-shadow: 1px 1px 1px rgb(0, 0, 0, 0.5);
            }
        }`:
        css`
            background-color: #333333;
        `
    }
    
`
