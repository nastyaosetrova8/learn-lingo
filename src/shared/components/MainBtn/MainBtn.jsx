import React from 'react'
import { MainBtnStyled } from './MainBtnStyled';

const MainBtn = ({children, id, onClick, name}) => {
  return (
    <MainBtnStyled type="button" id={id} onClick={onClick} name={name}>
      {children}
    </MainBtnStyled>
  )
}

export default MainBtn;
