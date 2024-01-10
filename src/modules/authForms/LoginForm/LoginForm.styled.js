import styled from "styled-components";
import { LuEye, LuEyeOff } from "react-icons/lu";

export const StyledModal = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 474px;
  padding: 64px 64px;
  width: 100%;
  border: 1px solid var(--green-color);
  border-radius: 20px;
  background-color: var(--light-green-color);
`;

export const ModalTitle = styled.h2`
  align-self: center;
  font-weight: 500;
  font-size: 40px;
  line-height: 1.2;
  color: var(--main-text-color);
`;

export const FormStyled = styled.form`
  width: 100%;
`;

export const InputsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  row-gap: 18px;
  margin-top: 32px;
  margin-bottom: 32px;
  width: 100%;
`;

export const InputPasswWrapStyled = styled.div`
  width: 100%;
  position: relative;
`;

export const LuEyeStyled = styled(LuEye)`
  color: var(--main-text-color);
`;

export const LuEyeOffStyled = styled(LuEyeOff)`
  color: var(--main-text-color);
`;

export const BtnEyeStyled = styled.button`
  position: absolute;
  top: 50%;
  right: 14px;
  width: 26px;
  height: 26px;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const ErrorsStyled = styled.div`
  margin: 0 0;
  font-size: 12px;
  line-height: 1.1;
  color: var(--red-color);
`;

export const SubmitBtnStyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
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
