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

// <ul>
//         <li>
//           <p>32,000 +</p>
//           <p>Experienced tutors</p>
//         </li>
//         <li>
//           {" "}
//           <p>300,000 +</p>
//           <p>5-star tutor reviews</p>
//         </li>
//         <li>
//           {" "}
//           <p>120 +</p>
//           <p>Subjects taught</p>
//         </li>
//         <li>
//           {" "}
//           <p>200 +</p>
//           <p>Tutor nationalities</p>
//         </li>
//       </ul>
