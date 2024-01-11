import styled from "styled-components";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";

export const FavoritesPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding: 96px 128px;
  background-color: var(--second-background);

  @media screen and (max-width: 768px) {
    padding: 46px 78px;
  }
`;

export const EmptyPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 96px 128px;
  background-color: var(--second-background);

  @media screen and (max-width: 768px) {
    padding: 46px 78px;
  }
`;

export const FavoriteEmptyText = styled.p`
  font-size: 24px;
  line-height: 1.5;
  font-weight: 700;
  text-align: center;
  color: var(--main-text-color);
`;

export const WrapperLinkStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

export const BsFillArrowLeftSquareFillStyled = styled(
  BsFillArrowLeftSquareFill
)`
  margin-right: 8px;
  width: 18px;
  height: 18px;
  color: var(--green-color);
  &:hover,
  &:focus {
    color: var(--text-color-70);
  }
`;

export const FindStyled = styled.p`
  font-size: 22px;
  line-height: 1.5;
  font-weight: 700;
  text-align: center;
  color: var(--green-color);
  &:hover,
  &:focus {
    color: var(--text-color-70);
  }
`;

export const RemoveAllBtnStyled = styled.button`
  display: block;
  margin: 50px auto 150px;
  font-size: 16px;
  line-height: 1.5;
  font-weight: 500;
  background-color: transparent;
  text-decoration: underline;
  color: var(--main-text-color);
  &:hover,
  &:focus {
    color: var(--text-color-70);
    text-decoration-thickness: 4px;
  }
`;
