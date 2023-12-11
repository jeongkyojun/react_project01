import styled from "styled-components";

export const StyledCalandarBoard = styled.div`
    display: flex;
    flex-direction: row;
    border: 1px solid blue;
    width: ${({width})=>width+'rem'||'3rem'};
    height: ${({height})=>height+'rem'||'2rem'};
`
