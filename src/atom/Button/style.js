import { css, styled } from "styled-components";


const DEFAULT_WIDTH = 10;
const DEFAULT_HEIGHT = 2;

export const StyledButton = styled.button`
    width: ${({width})=>width||DEFAULT_WIDTH}rem;
    height: ${({height})=>height||DEFAULT_HEIGHT}rem;

    ${({isText, textColor, backgroundColor, disabled})=>
        isText
        ? css`
            color: black;
            background: none;
        `
        : css`
            color: ${textColor || 'white'};
            background-color: ${backgroundColor || 'black'};
            ${disabled
            ? 'filter: brightness(80%)'
            : `
            // 모바일 환경이 아닐 때에만 hover 사용
            @media(hover: hover) and (pointer: fine) {
                &:hover {
                filter: brightness(80%);
                transition: all 0.1s;
                box-shadow: 1px 1px 1px rgb(0, 0, 0, 0.5);
                }
            }
            &:active {
                border-bottom-width: 1px;
                transition: all 0.1s;
                box-shadow: none;
            }
            `};
    `}
    ${({ borderColor }) =>
        borderColor
        ? css`
            border: 1px solid ${borderColor};
            `
        : css`
            border: none;
            `}
    
    border-radius: ${({borderRadius})=> borderRadius||'none'};
    
    ${({ disabled }) =>
        !disabled &&
        css`
        cursor: pointer;
        `}

    font-weight: bold;

`
