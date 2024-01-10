import { uid } from "react-uid";
import { AmountStyled, StatisticItemStyled, StatisticListStyled, StatisticSectionStyled, TutorStyled } from "./HomeStatisticSectionStyled";

const HomeStatisticSection = () => {
  const statisticItems = [
    { amount: "32,000 +", tutor: "Experienced tutors" },
    { amount: "300,000 +", tutor: "5-star tutor reviews" },
    { amount: "120 +", tutor: "Subjects taught" },
    { amount: "200 +", tutor: "Tutor nationalities" },
  ];

  const generateStatisticItems = () => {
    return statisticItems.map((item, index) => (
      <StatisticItemStyled key={index}>
        <AmountStyled>{item.amount}</AmountStyled>
        <TutorStyled>{item.tutor}</TutorStyled>
      </StatisticItemStyled>
    ));
  };

  return (
    <StatisticSectionStyled> 
       <StatisticListStyled >
       {generateStatisticItems()}
       </StatisticListStyled>
      
    </StatisticSectionStyled>
  );
};

export default HomeStatisticSection;

