import styled, { css } from 'styled-components';

///////////////////////////////
///////////////////////////////
// Zoomed cat

const zoomedCSS = css`
  transform: scale(2) translate(-7vw, -25%);
  position: absolute;
  z-index: 777;
  box-shadow: 0vw 0 100vw 100vw #111c;

  top: 50vh;
  left: 50vw;
  &:after {
    z-index: 999 !important;
    content: 'Tap on the Picture to Close';
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    width: 100px;
    height: 100px;
    font-size: 20rem;
    color: red;
  }
`;
const normalCSS = css`
  &:hover,
  &:focus {
    transform: none;

    box-shadow: none;
  }
  position: unset;
  transform: unset;
`;

const getCatZoomedStyles = ({ isZoomed }: { isZoomed: boolean }) => {
  return isZoomed ? zoomedCSS : normalCSS;
};

export const CatStyled = styled.img`
  cursor: pointer;

  /* transition: 200ms ease-out; */
  max-width: 30vw;

  ${getCatZoomedStyles}
`;
