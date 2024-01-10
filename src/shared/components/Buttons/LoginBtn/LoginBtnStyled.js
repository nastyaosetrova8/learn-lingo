import styled from "styled-components";

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

  @media screen and (max-width: 768px) {
    font-weight: 700;
    &:hover {
    color: var(--second-background);
  }
  }
`;