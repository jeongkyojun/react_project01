import styled, { css } from "styled-components";

export const StyledBoardBar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: start;
    width: ${({width})=>width||'100%'};
    height: 2rem;
    border: 1px solid green;
    color: white;

    ${({isEmpty})=>
    isEmpty?  
        css`
            background-color: rgba(30,30,30,0.8);
        `
        :
        css`
            @media(hover: hover) and (pointer: fine) {
                &:hover {
                filter: brightness(80%);
                transition: all 0.1s;
                box-shadow: 1px 1px 1px rgb(0, 0, 0, 0.5);
                }
            }
        `
    }
`

export const StyledBoardMenu = styled.div`
    display: flex;
    height: 100%;
`

export const StyledBoardNumWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width : ${({width})=>width||'5rem'};
    height: 100%; 
    color: white;
`

export const StyledBoardTitleWrapper = styled.div`
    display: flex;
    align-items: center;
    width : ${({width})=>width||'30rem'};
    height: 100%; 
    color: white;
`

export const StyledBoardCreatorWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width : ${({width})=>width||'5rem'};
    height: 100%;
    color: white;
`

export const StyledBoardCreateDateWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width : ${({width})=>width||'5rem'};
    height: 100%; 
    color: white;
`

export const StyledBoardViewWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width : ${({width})=>width||'5rem'};
    height: 100%;
    color: white;
`

export const StyledBoardGoodWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width : ${({width})=>width||'5rem'};
    height: 100%;
    color: white;
`

export const StyledEmptyBoardWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`
