import styled from 'styled-components';
import { BsFillArrowLeftSquareFill } from 'react-icons/bs';

export const FavoriteTitleStyled = styled.h1`
  margin-top: 50px;
  font-family: 'Montserrat';
  font-size: 32px;
  line-height: 1.5;
  font-weight: 600;
  text-align: center;
  color: var(--main-text-color);
`;

export const FavoriteEmptyText = styled.p`
  font-family: 'Montserrat';
  font-size: 18px;
  line-height: 1.5;
  font-weight: 600;
  text-align: center;
  color: var(--main-text-color);
`;

export const WrapperLinkStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

export const BsFillArrowLeftSquareFillStyled = styled(BsFillArrowLeftSquareFill)`
  margin-right: 8px;
  width: 18px;
  height: 18px;
  color: var(--green-color);
  &:hover,
  &:focus {
    color: var(--text-color-70);
  }
`;

export const FindStyled = styled.span`
  font-family: 'Montserrat';
  font-size: 18px;
  line-height: 1.5;
  font-weight: 600;
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
  font-family: 'Manrope';
  font-size: 16px;
  line-height: 1.5;
  font-weight: 500;
  background-color: transparent;
  color: var(--green-color);
  &:hover,
  &:focus {
    color: var(--text-color-70);
  }
`;
