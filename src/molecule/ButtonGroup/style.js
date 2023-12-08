import styled from "styled-components";

export const StyledButtonGroup = styled.div`
    width: 100%;
    display: flex;
    flex-direction: ${({isRow})=>isRow?`row`:`column`};
    justify-content: ${({justifyContent})=>justifyContent||'center'};
`