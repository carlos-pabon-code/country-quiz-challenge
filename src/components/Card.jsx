import { useContext } from "react";
import styled from "styled-components";
import TopCardImage from "../assets/images/card-image.svg";
import ResultsContext from "../context/ResultsContext";
import { CountryQuestion } from "./CountryQuestion";

const CardContainer = styled.section`
  background-color: var(--white);
  height: auto;
  padding-bottom: 6rem;
  width: 300px;
  margin: 0 auto;
  border-radius: 24px;
  position: relative;
  transition: all 0.6s ease-in-out;
  @media (min-width: 768px) {
    width: 480px;
    height: auto;
    min-height: 360px;
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
  //useContext to hide the image when the page limit is reached
  const { results } = useContext(ResultsContext);
  return (
    <CardContainer>
      <CardHeader>
        <CardTitle>Country Quiz</CardTitle>
        {results.page <= results.limit && (
          <figure>
            <CardImage src={TopCardImage} alt="card-image" />
          </figure>
        )}
      </CardHeader>
      <CountryQuestion />
    </CardContainer>
  );
};
