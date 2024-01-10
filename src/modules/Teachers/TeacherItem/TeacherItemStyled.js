import styled from "styled-components";
import { FaStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

export const TeacherCardWrapper = styled.li`
  position: relative;
  display: flex;
  gap: 48px;
  width: 100%;
  padding: 24px;
  border-radius: 24px;
  background-color: var(--main-background);
  &:not(:last-child) {
    margin-bottom: 32px;
  }

  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
    row-gap: 8px;
    column-gap: 8px;
  }
`;

export const ImgBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 120px;
  height: 120px;
  padding: 12px;
  border: 3px solid var(--green-color);
  border-radius: 50%;
`;

export const ImgWrapper = styled.div`
  width: 96px;
  height: 96px;
  border-radius: 50%;
  overflow: hidden;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const AllInfoWrapper = styled.div`
  width: 100%;
`;

export const TopInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 8px;
`;

export const SubtitleTopStyled = styled.p`
  color: var(--second-text-color);
`;

export const WrapperListAndHeart = styled.div`
  display: flex;
  align-items: center;
  gap: 64px;
`;

export const TopListWrapper = styled.ul`
  display: flex;
  margin-right: 90px;

  & li {
    display: flex;
    align-items: center;
    gap: 8px;
    height: 16px;

    &:not(:last-child) {
      border-right: 1px solid var(--grey-color);
      padding-right: 16px;
    }
    &:not(:first-child) {
      padding-left: 16px;
    }

    & span {
      color: var(--green-bright);
    }
  }

  @media screen and (max-width: 1240px) {
    flex-wrap: wrap;
    row-gap: 8px;
    column-gap: 8px;
  }
`;

export const FaStarIconStyled = styled(FaStar)`
  color: var(--yellow-bright);
`;

export const ToFavoriteBtn = styled.button`
  position: absolute;
  top: 24px;
  right: 24px;
  width: 26px;
  height: 26px;
  background-color: transparent;
`;

export const HeartInFavoriteStyled = styled(FaHeart)`
  width: 26px;
  height: 26px;
`;

export const HeartIconStyled = styled(FaRegHeart)`
  width: 26px;
  height: 26px;
`;

export const TeacherNameStyled = styled.h2`
  margin-bottom: 32px;
  font-size: 24px;
  font-weight: 500;
  line-height: 1;
`;

export const SubtitlesWrapStyled = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 16px;
`;

export const SubtitlesStyled = styled.li`
  color: var(--second-text-color);

  & span {
    color: var(--main-text-color);
  }
`;

export const SubtitleDescrLanguage = styled.span`
  color: var(--main-text-color);
  text-decoration: underline;
  text-decoration-color: var(--second-text-color);
`;

export const ReadMoreBtnStyled = styled.button`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  background-color: transparent;
  text-decoration: underline;
  transition: text-decoration-thickness 250ms ease-in-out;

  &:hover,
  &:focus {
    text-decoration-thickness: 3px;
  }
`;

export const LevelsListStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 32px;
`;

export const LevelItemStyled = styled.li`
  padding: 8px 12px;
  border-radius: 35px;
  border: 1px solid var(--grey-color);
  font-size: 14px;
  line-height: 1.14;

  &:first-child {
    background-color: var(--green-color);
    border: none;
  }
`;

export const DescStyled = styled.div`
  margin-bottom: 32px;
  font-weight: 400;
`;

export const ReviewItemStyled = styled.li`
  &:not(:last-child) {
    margin-bottom: 32px;
  }
`;

export const ReviewerInfoWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
`;

export const AvatarReviewWrapper = styled.div`
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

export const ReviewerName = styled.p`
  color: var(--second-text-color);
`;

export const RatingWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
`;

export const WrapperListMobile = styled.div`
  margin-bottom: 16px;
`;
