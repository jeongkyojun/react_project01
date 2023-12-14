import styled from "styled-components";

export const StyledTodoList = styled.div`
    width: ${({width})=>width||10}rem;
    height: ${({height})=>height||10}rem;
    border: 1px solid white;
    color: white;
`

export const StyledTodoListHead = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`
