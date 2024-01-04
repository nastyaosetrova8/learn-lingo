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
`;

export const NavLinkStyled = styled(NavLink)`
  font-weight: 700;
  font-size: 14px;
  color: #222;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1.1em;
  position: relative;

  transition: all 250ms ease-in-out;

  &:hover {
    color: var(--green-color);
  }

  &.active {
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
  }
`;
