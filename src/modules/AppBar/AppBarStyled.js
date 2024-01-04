import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 20px 64px;

  @media screen and (max-width: 768px) {
    padding: 20px 30px;
  }
`;

export const LogoStyled = styled(NavLink)`
  display: flex;
  align-items: center;
`;

export const LogoTextStyled = styled.h2`
  margin-left: 8px;
  font-size: 20px;
  line-height: 1.2;

  /* color: #121417;
font-family: Roboto;
font-style: normal;
font-weight: 500; */
`;
