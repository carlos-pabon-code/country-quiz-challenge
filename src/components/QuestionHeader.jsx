import styled from "styled-components";

const QuestionTitle = styled.h3`
  color: var(--results-title);
  font-family: var(--title);
  margin-bottom: 1rem;
  font-size: 18px;
  @media (min-width: 768px) {
    font-size: 24px;
  }
`;

const Flag = styled.img`
  height: 54px;
  width: 84px;
  margin-bottom: 0.5rem;
`;

export const QuestionHeader = ({ questionType, selectedCountry }) => {
  return (
    <>
      {questionType === 2 && <Flag src={selectedCountry?.flag} />}
      {selectedCountry && questionType === 1 ? (
        <QuestionTitle>
          {selectedCountry.capital} is the capital of?
        </QuestionTitle>
      ) : (
        <QuestionTitle>Which country this flag belongs to?</QuestionTitle>
      )}
    </>
  );
};
