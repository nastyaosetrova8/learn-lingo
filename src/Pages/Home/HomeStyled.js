import styled from "styled-components";

export const StyledHomeContainer = styled.div`
  max-width: 1440px;
  /* width: 100%; */
  /* min-height: 100vh; */
  margin: 0 auto;
  padding: 20px 64px 32px;
`;

export const StyledMainWrap = styled.div`
  display: flex;
  gap: 24px;
  margin-bottom: 24px;
`;

export const ContentHomeWrapStyled = styled.div`
  padding: 98px 64px;
  max-width: 720px;
  width: 100%;
  border-radius: 30px;
  background-color: var(--second-background);
`;

export const TitleWrap = styled.div`
max-width: 558px;
width: 100%;
`;

export const TitleStyled = styled.h1`
  margin-bottom: 32px;
  font-weight: 500;
  font-size: 48px;
  line-height: 1.17;
  padding: 0 5px;
  
  span {
    font-style: italic;
    font-weight: 400;
    background-image: linear-gradient(to bottom, var(--light-green-color), var(--light-green-color));
    position: relative;
    /* background-color: var(--light-green-color);
    background-size: 80% 80%;
    background-repeat: no-repeat; */
    /* background-position: 0% 72%; */


    border-radius: 10px; 
    padding: 0 6px;

    /* position: relative;

    &::after {
      content: "";
      position: absolute;
      width: 40px;
      height: 40px;
      background-color: var(--light-green-color);
      border-radius: 10px; */

      /* left: 40%;
      margin-bottom: -8px;
      bottom: 0; */
    /* } */
  }
`;

export const TextWrap = styled.div`
max-width: 471px;
width: 100%;
`;

export const TextStyled = styled.p`
  margin-bottom: 64px;
  font-weight: 400;
`;

export const BtnStartStyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px 88px;
  background-color: var(--green-color);
  border-radius: 12px;
  font-size: 18px;
  font-weight: 700;
  transform: scale(1);
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: var(--light-green-color);
    transform: scale(0.94);
  }
`;

export const ImgHomeWrapStyled = styled.div`
  max-width: 568px;
  /* height: 530px; */
  /* height: 100%; */
  width: 100%;
  border-radius: 30px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
  }

  /* background-repeat: no-repeat; */
  /* background-size: cover;
  background-position: center; */
`;


