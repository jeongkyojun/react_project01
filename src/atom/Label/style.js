import styled, { css } from "styled-components";

const DEFAULT_FONTSIZE = 1;
const DEFAULT_TEXTCOLOR = 'white';

export const StyledLabel = styled.label`
    font-size:  ${({ fontSize }) => fontSize || DEFAULT_FONTSIZE}rem;
    color: ${({ textColor }) => textColor || DEFAULT_TEXTCOLOR};

  border: none;
`;
