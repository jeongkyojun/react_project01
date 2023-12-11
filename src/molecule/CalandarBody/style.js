import styled from "styled-components";

export const StyledCalandarBody = styled.div`
    display: flex;
    flex-direction: column;
    width: ${({width})=>width+'rem'||'100%'};
    height: ${({height})=>height+'rem'||'85%'};
    border: 1px solid white;
`
export const StyledWeekRender = styled.div`
    display: flex;
    flex-direction: row;
`
