import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavStyled = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  background-color: var(--light-green-color);

  position: fixed;
  top: 65px;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
`;

export const NavLinkStyled = styled(NavLink)`
  justify-content: center;
  position: relative;
  width: 100%;
  font-weight: 700;
  font-size: 18px;
  color: #222;
  display: flex;
  padding: 0 1.1em;
  transition: all 250ms ease-in-out;

  &:hover {
    color: var(--second-background);
  }

  &.active {
     &::after {
       content: "";
       position: absolute;
       width: 8px;
       height: 8px;
       background-color: var(--second-background);
       border-radius: 50%;

       left: 50%;
       margin-bottom: -8px;
       bottom: 0;
     }
   }
`;


