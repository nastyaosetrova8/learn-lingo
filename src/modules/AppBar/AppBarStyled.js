import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledHomeContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 20px 128px;
`;

export const LogoStyled = styled(NavLink)`
  display: flex;
  align-items: center;
`;

export const LogoTextStyled = styled.h2`
  margin-left: 8px;
  font-size: 20px;
  line-height: 1.2;
`;
