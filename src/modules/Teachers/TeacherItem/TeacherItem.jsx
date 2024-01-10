import React, { useState } from "react";
import {
  AllInfoWrapper,
  AvatarReviewWrapper,
  DescStyled,
  FaStarIconStyled,
  HeartIconStyled,
  HeartInFavoriteStyled,
  ImgBox,
  ImgWrapper,
  LevelItemStyled,
  LevelsListStyled,
  RatingWrapper,
  ReadMoreBtnStyled,
  ReviewItemStyled,
  ReviewerInfoWrap,
  ReviewerName,
  SubtitleDescrLanguage,
  SubtitleTopStyled,
  SubtitlesStyled,
  SubtitlesWrapStyled,
  TeacherCardWrapper,
  TeacherNameStyled,
  ToFavoriteBtn,
  TopInfoWrapper,
  TopListWrapper,
  WrapperListAndHeart,
  WrapperListMobile,
} from "./TeacherItemStyled";
import OnlineIcon from "../../../shared/components/Icons/OnlineIcon/OnlineIcon";
import { PiBookOpenBold } from "react-icons/pi";
import MainBtn from "../../../shared/components/MainBtn/MainBtn";
import { useSelector } from "react-redux";
import { selectFavorite } from "../../../redux/favorites/favoritesSelectors";
import { useMediaQuery } from "react-responsive";

const TeacherItem = ({
  name,
  surname,
  languages,
  levels,
  rating,
  reviews,
  price_per_hour,
  lessons_done,
  avatar_url,
  lesson_info,
  conditions,
  experience,
  id,
  onOpenModal,
  onFavorite,
}) => {
  const [expandedUserId, setExpandedUserId] = useState(null);
  const isFavorite = useSelector(selectFavorite);
  const isMobile = useMediaQuery({ query: "(max-width: 1240px)" });

  const generateReviewsItems = () => {
    return reviews.map((item, index) => (
      <ReviewItemStyled key={index}>
        <ReviewerInfoWrap>
          <AvatarReviewWrapper>
            <img src={item.avatar_rev} alt={item.reviewer_name} />
          </AvatarReviewWrapper>
          <div>
            <ReviewerName>{item.reviewer_name}</ReviewerName>
            <RatingWrapper>
              <FaStarIconStyled />
              <p>{item.reviewer_rating.toFixed(1)}</p>
            </RatingWrapper>
          </div>
        </ReviewerInfoWrap>
        <p>{item.comment}</p>
      </ReviewItemStyled>
    ));
  };

  const generateLevelItems = () => {
    return levels.map((item, index) => (
      <LevelItemStyled key={index}>
        <p>{item}</p>
      </LevelItemStyled>
    ));
  };

  const toggleExpandedUser = (id) => {
    setExpandedUserId(id);
  };

  return (
    <TeacherCardWrapper>
      <ImgBox>
        <ImgWrapper>
          <img src={avatar_url} alt={name} />
        </ImgWrapper>
        <OnlineIcon />
      </ImgBox>
      <AllInfoWrapper>
        <TopInfoWrapper>
          <SubtitleTopStyled>Languages</SubtitleTopStyled>
          {!isMobile && (
            <WrapperListAndHeart>
              <TopListWrapper>
                <li>
                  <PiBookOpenBold /> Lessons online
                </li>
                <li>Lessons done: {lessons_done}</li>
                <li>
                  <FaStarIconStyled /> Rating: {rating}
                </li>
                <li>
                  Price / 1 hour: <span>{price_per_hour}$</span>
                </li>
              </TopListWrapper>
            </WrapperListAndHeart>
          )}
        </TopInfoWrapper>

        <ToFavoriteBtn onClick={onFavorite}>
          {isFavorite.some((item) => item.id === id) ? (
            <HeartInFavoriteStyled />
          ) : (
            <HeartIconStyled />
          )}
        </ToFavoriteBtn>

        <TeacherNameStyled>
          {name} {surname}
        </TeacherNameStyled>
        {isMobile && (
          <WrapperListMobile>
            <TopListWrapper>
              <li>
                <PiBookOpenBold /> Lessons online
              </li>
              <li>Lessons done: {lessons_done}</li>
              <li>
                <FaStarIconStyled /> Rating: {rating}
              </li>
              <li>
                Price / 1 hour: <span>{price_per_hour}$</span>
              </li>
            </TopListWrapper>
          </WrapperListMobile>
        )}

        <SubtitlesWrapStyled>
          <SubtitlesStyled>
            Speaks:
            <SubtitleDescrLanguage>
              {languages.join(", ")}
            </SubtitleDescrLanguage>
          </SubtitlesStyled>
          <SubtitlesStyled>
            Lesson Info: <span>{lesson_info}</span>
          </SubtitlesStyled>
          <SubtitlesStyled>
            Conditions: <span>{conditions}</span>
          </SubtitlesStyled>
        </SubtitlesWrapStyled>

        {!expandedUserId && (
          <ReadMoreBtnStyled
            type="button"
            onClick={() => toggleExpandedUser(id)}
          >
            Read more
          </ReadMoreBtnStyled>
        )}
        {expandedUserId === id && (
          <>
            <DescStyled>{experience}</DescStyled>
            <ul>{generateReviewsItems()}</ul>
          </>
        )}
        <LevelsListStyled>{generateLevelItems()}</LevelsListStyled>

        {expandedUserId === id && (
          <MainBtn
            type="button"
            id={id}
            onClick={onOpenModal}
            name="bookingLesson"
          >
            Book trial lesson
          </MainBtn>
        )}
      </AllInfoWrapper>
    </TeacherCardWrapper>
  );
};

export default TeacherItem;
