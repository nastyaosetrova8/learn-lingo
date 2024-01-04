import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavContainerStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavStyled = styled.nav`
  display: flex;
  align-items: center;

  flex-direction: column;
  background-color: #fff;

  width: 100%;
  position: fixed;
  top: 65px;
  left: 0;
`;

export const NavLinkStyled = styled(NavLink)`
  font-weight: 700;
  font-size: 14px;
  color: #222;
  display: flex;
  padding: 0 1.1em;
  width: 100%;

  transition: all 250ms ease-in-out;

  &:hover {
    color: var(--green-color);
  }

  /* &.active {
     &::after {
       content: "";
       position: absolute;
       width: 8px;
       height: 8px;
       background-color: var(--green-color);
       border-radius: 50%;

       left: 40%;
       margin-bottom: -8px;
       bottom: 0;
     }
   } */
`;
