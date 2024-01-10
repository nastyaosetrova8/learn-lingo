import styled from "styled-components";

export const InputS = styled.input`
  box-sizing: border-box;
  padding: 16px 18px;
  width: 100%;
  height: 54px;
  border-radius: 12px;
  border: 1px solid var(--text-color-10);
  font-size: 16px;
  font-weight: 400;
  line-height: 1.3;
  outline: 1px solid transparent;
  background: transparent;
  color: var(--main-text-color);

  &::placeholder {
    color: var(--main-text-color);
    background: transparent;
  }

  &:hover,
  &:focus {
    border-color: var(--green-color);
  }

  &.input-password{
    padding: 14px 54px 14px 18px;
  }

  @media screen and (max-width: 320px) {
    font-size: 14px;
    &::placeholder {
      line-height: 1.1;
    }
  }
`;