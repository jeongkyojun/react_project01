import styled from "styled-components";

export const StyledBoardList = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: ${({width})=>width||'100%'};
`

export const StyledBoardMenu = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    height: 2rem;
    color: white;
`

export const StyledBoardListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
`

export const StyledBoardNumWrapper = styled.div`
    display: flex;
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
    align-items: center;
    width: 3rem;
    height: 100%;
    color: white;
`

export const StyledBoardCreateDateWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 3rem;
    height: 100%; 
    color: white;
`

export const StyledBoardViewWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 3rem;
    height: 100%;
    color: white;
`

export const StyledBoardGoodWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 3rem;
    height: 100%;
    color: white;
`
