import { styled } from "styled-components";

const DEFAULT_WIDTH = 3;
const DEFAULT_HEIGHT = 2;

export const StyledInput = styled.input`
    width: ${({width})=>width||DEFAULT_WIDTH}rem;
    height: ${({height})=>height||DEFAULT_HEIGHT}rem;
`
