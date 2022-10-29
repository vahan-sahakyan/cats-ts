import styled, { css, StyledComponent } from 'styled-components';
import { Link } from 'react-router-dom';

///////////////////////////////
///////////////////////////////
// ACTIVE-PASSIVE sidebar items

const activeCSS = css`
  background-color: #fff1;
  color: #6db4ffdd !important;
`;
const passiveCSS = css`
  color: #333;
`;
const getLinkStyles = ({ active }: { active: boolean }) => {
  return active ? activeCSS : passiveCSS;
};
export const LinkStyled: StyledComponent<
  any,
  any,
  object,
  string | number | symbol
> = styled(Link)`
  ${getLinkStyles};
`;

///////////////////////////////
///////////////////////////////
// OPEN-CLOSE aside

const openCSS = css`
  transform: translateY(0%);
  transition: 300ms ease-in-out;
`;
const closedCSS = css`
  transform: translateY(81%);
  transition: 300ms ease-in-out;
`;
const getAsideStyles = ({ isOpen }: { isOpen: boolean }) => {
  return isOpen ? openCSS : closedCSS;
};
export const AsideStyled = styled.aside`
  z-index: 9;
  span {
    display: none;
  }
  @media (max-width: 720px) {
    span {
      display: inline;
    }
    ${getAsideStyles}
  }
`;
