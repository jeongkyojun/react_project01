import styled from "styled-components";

export const StyledBoardBar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: start;
    width: ${({width})=>width||'100%'};
    height: 2rem;
    border: 1px solid green;
    color: white;
`

export const StyledBoardMenu = styled.div`
    display: flex;
    height: 100%;
`

export const StyledBoardNumWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width : 3rem;
    height: 100%; 
    color: white;
`

export const StyledBoardTitleWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 30rem;
    height: 100%; 
    color: white;
`

export const StyledBoardCreatorWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3rem;
    height: 100%;
    color: white;
`

export const StyledBoardCreateDateWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3rem;
    height: 100%; 
    color: white;
`

export const StyledBoardViewWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3rem;
    height: 100%;
    color: white;
`

export const StyledBoardGoodWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3rem;
    height: 100%;
    color: white;
`