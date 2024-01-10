import styled from "styled-components";

export const StyledModal = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 600px;
  width: 100%;
  padding: 64px 64px;
  border: 1px solid var(--green-color);
  border-radius: 20px;
  background-color: var(--main-background);
`;

export const ModalTitle = styled.h2`
  align-self: self-start;
  margin-bottom: 20px;
  font-weight: 500;
  font-size: 40px;
  line-height: 1.2;
`;

export const DescBookingStyled = styled.p`
  margin-bottom: 20px;
  font-weight: 400;
  color: var(--text-color-70);
`;

export const TeacherInfoWrap = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-start;
  gap: 14px;
  margin-bottom: 40px;
`;

export const TeacherAvatarWrapper = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  overflow: hidden;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const TeacherSubtitle = styled.p`
  font-size: 12px;
  line-height: 1.3;
  color: var(--second-text-color);
`;

export const FormTitleStyled = styled.h3`
  align-self: flex-start;
  font-size: 24px;
  font-weight: 500;
  line-height: 1.3;
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
  margin: 40px 0;
  width: 100%;
`;

export const ErrorsStyled = styled.div`
  margin: 0 0;
  font-size: 12px;
  line-height: 1.1;
  color: var(--red-color);
`;

export const BookBtnStyled = styled.button`
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

