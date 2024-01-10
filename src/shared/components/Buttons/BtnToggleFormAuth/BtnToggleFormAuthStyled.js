import styled from "styled-components";

export const BtnToggleFormAuthS = styled.button`
  margin-top: 16px;
  background-color: transparent;
  color: var(--main-text-color);
  border: none;
  border-bottom: 1px solid var(--second-background);
  cursor: pointer;
  transition: border-bottom 250ms linear;

  &:hover,
  &:focus {
    border-bottom: 1px solid var(--text-color-70);
  }

  @media screen and (max-width: 768px) {
    max-width: 295px;
    font-size: 14px;
    line-height: 1.1;
  }
`;
