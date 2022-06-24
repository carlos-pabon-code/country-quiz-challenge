import styled from "styled-components";
import TopCardImage from "../assets/images/card-image.svg";
import { CountryQuestion } from "./CountryQuestion";

const CardContainer = styled.section`
  background-color: var(--white);
  height: auto;
  padding-bottom: 6rem;
  width: 300px;
  margin: 0 auto;
  border-radius: 24px;
  position: relative;
  @media (min-width: 768px) {
    width: 464px;
    height: 580px;
  }
`;

const CardHeader = styled.section`
  display: flex;
  align-items: top;
  justify-content: space-between;
`;

const CardTitle = styled.h2`
  margin-top: -4rem;
  text-transform: uppercase;
  color: var(--soft-color);
  font-family: var(--title);
  font-size: 18px;
  @media (min-width: 768px) {
    font-size: 36px;
  }
`;
const CardImage = styled.img`
  width: 140px;
  margin-top: -4rem;
`;

export const Card = () => {
  return (
    <CardContainer>
      <CardHeader>
        <CardTitle>Country Quiz</CardTitle>
        <figure>
          <CardImage src={TopCardImage} alt="card-image" />
        </figure>
      </CardHeader>
      <CountryQuestion />
    </CardContainer>
  );
};
