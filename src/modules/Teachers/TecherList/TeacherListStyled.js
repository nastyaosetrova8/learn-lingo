import styled from "styled-components";

export const TeacherPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 96px 128px;
  min-height: 100vh;
  background-color: var(--second-background);

  @media screen and (max-width: 768px) {
    padding: 46px 78px;
  }
`;

export const TeacherListStyled = styled.ul`
  max-width: 1184px;
  width: 100%;
  margin-bottom: 64px;
`;
