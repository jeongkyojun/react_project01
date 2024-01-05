import styled, { css } from 'styled-components';

export const ImageWrapper = styled.div`
  ${({ onClick }) =>
    onClick &&
    css`
      cursor: pointer;
    `}
  width: ${({ width }) => width};
  height: ${({ height }) => height || '100%'};
`;

export const StyledImage = styled.img`
  ${({ isCircle }) =>
    isCircle &&
    css`
      object-fit: cover;
      border-radius: 50%;
    `}
  width: 100%;
  height: 100%;
`;
