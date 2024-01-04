import styled from "styled-components";
import { FiLogIn } from "react-icons/fi";

export const AuthStyled = styled.div`
  display: flex;

  /* @media screen and (max-width: 768px) {
    /* visibility: visible;
    opacity: 1; */
  /* display: none; */
  /* } */
`;

export const LoginBtnStyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 16px;
  color: var(--main-text-color);
  background-color: transparent;
  transition: color 250ms ease-in-out;

  &:hover {
    color: var(--green-color);
  }
`;

export const LoginIconStyled = styled(FiLogIn)`
  margin-right: 8px;
  width: 20px;
  height: 20px;
  color: var(--green-color);
`;
