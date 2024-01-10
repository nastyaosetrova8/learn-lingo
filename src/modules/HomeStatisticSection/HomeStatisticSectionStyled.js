import styled from "styled-components";

export const StatisticSectionStyled = styled.div`
/* padding: 40px 123px; */
max-width: 1440px;
padding-top: 40px;
padding-bottom: 40px;
border: 1.5px dashed var(--green-color);
border-radius: 30px;
`;

export const StatisticListStyled = styled.ul`
display: flex;
justify-content: space-evenly;
flex-wrap: wrap;

@media screen and (max-width: 768px) {
    column-gap: 20px;
  }
`;

export const StatisticItemStyled = styled.li`
display: flex;
align-items: center;
gap: 16px;
`;

export const AmountStyled = styled.p`
/* color: #121417; */
/* font-family: Roboto; */
font-size: 28px;
/* font-style: normal; */
/* font-weight: 500; */
line-height: 1.14;
`;

export const TutorStyled = styled.p`
/* display: flex;
flex-wrap: wrap; */
width: 96px;
color: var(--text-color-70);
font-size: 14px;
/* font-style: normal; */
font-weight: 400;
line-height: 1.28;
`;


