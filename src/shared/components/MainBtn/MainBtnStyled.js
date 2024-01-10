import styled from "styled-components";

export const MainBtnStyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  padding: 16px 48px;
  font-size: 18px;
  font-weight: 700;
  background-color: var(--green-color);
  border-radius: 12px;
  transform: scale(1);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    transform: scale(1.03);
  }
`;
