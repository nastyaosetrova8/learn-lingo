import styled from "styled-components";

export const AuthBtnStyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 14px 39px;
  border-radius: 12px;
  color: var(--main-background);
  background-color: var(--main-text-color);
  transition: all 250ms ease-in-out;

  &:hover {
   background-color: var(--text-color-70);
   color: var(--green-color);
  }
`;
