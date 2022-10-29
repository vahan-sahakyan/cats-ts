import styled, { css } from 'styled-components';

///////////////////////////////
///////////////////////////////
// Zoomed cat

const zoomedCSS = css`
  transform: scale(2) translate(-8vw, -10vh);
  position: fixed;
  z-index: 777;
  box-shadow: 0vw 0 100vw 100vw #111c;

  top: 50vh;
  left: 50vw;
`;
const notZoomedCSS = css`
  border: 2px solid #000a;
  position: unset;
  transform: unset;
`;

const getCatZoomedStyles = ({ isZoomed }: { isZoomed: boolean }) => {
  return isZoomed ? zoomedCSS : notZoomedCSS;
};

// MAIN CAT STYLES
export const CatStyled = styled.img`
  cursor: pointer;
  max-width: 30vw;

  ${getCatZoomedStyles}
`;
