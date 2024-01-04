import React from "react";
import homeImg from "../../shared/img/homeImg.jpg";
import { BtnStartStyled, ContentHomeWrapStyled, ImgHomeWrapStyled, StyledHomeContainer, TextStyled, TitleStyled, StyledMainWrap, TitleWrap, TextWrap } from "./HomeStyled";
import HomeStatisticSection from "../../modules/HomeStatisticSection/HomeStatisticSection";


const Home = () => {
  return (
    <StyledHomeContainer>
      <StyledMainWrap>
      <ContentHomeWrapStyled>
        <TitleWrap>
        <TitleStyled>
          Unlock your potential with the best <span>language</span> tutors
        </TitleStyled>
        </TitleWrap>
        <TextWrap>
        <TextStyled>
          Embark on an Exciting Language Journey with Expert Language Tutors:
          Elevate your language proficiency to new heights by connecting with
          highly qualified and experienced tutors.
        </TextStyled>
        </TextWrap>
        <BtnStartStyled>Get started</BtnStartStyled>
      </ContentHomeWrapStyled>

      <ImgHomeWrapStyled>
        <img src={homeImg} alt="girl with macBook" />
      </ImgHomeWrapStyled>
      </StyledMainWrap>
      <HomeStatisticSection />
    </StyledHomeContainer>
  );
};

export default Home;
