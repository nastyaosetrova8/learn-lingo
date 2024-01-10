import styled from "styled-components";
import { FiLogIn } from "react-icons/fi";

export const AuthStyled = styled.div`
  display: flex;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
  }
`;

export const LoginIconStyled = styled(FiLogIn)`
  margin-right: 8px;
  width: 20px;
  height: 20px;
  color: var(--green-color);

  @media screen and (max-width: 768px) {
    color: var(--yellow-color);
  }
`;
