import styled from "styled-components";

export const StyledCalandarHead = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width:${({width})=>width||'100%'};
    height:${({height})=>height||'100%'};
`