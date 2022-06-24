import styled, { css } from "styled-components";

const QuestionLetters = styled.span`
  color: var(--answer-border);
  font-family: var(--title);
  font-size: 18px;
  font-weight: 500;
  padding-left: 0.5rem;
  @media (min-width: 768px) {
    padding: 0 3rem 0 1rem;
    font-size: 24px;
  }
`;

const QuestionValue = styled.span`
  color: var(--answer-border);
  font-family: var(--title);
  font-size: 16px;
  font-weight: 500;
  padding-left: 0.5rem;
  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

const AnswerIcon = styled.figure`
  width: 30px;
  height: 30px;
  margin-left: auto;
  margin-right: 0.5rem;
  svg {
    color: var(--white);
  }
  @media (min-width: 768px) {
    margin-right: 1rem;
  }
`;

const Option = styled.button`
  align-items: center;
  background-color: transparent;
  border-radius: 12px;
  border: solid 2px var(--answer-border);
  margin-left: auto;
  cursor: pointer;
  display: flex;
  font-weight: 700;
  height: 56px;
  justify-content: flex-start;
  margin: 1rem 0;
  text-align: right;
  transition: background-color 0.4s ease-in-out, color 0.4s ease-in-out;
  width: 100%;

  @media (min-width: 1024px) {
    &:hover {
      background-color: var(--answer-hover);
      border: solid 2px transparent;
    }
    &:hover #question-letters,
    &:hover #question-value {
      color: var(--white);
    }
  }

  ${({ selectedAnswer }) =>
    (selectedAnswer.state === true || selectedAnswer.state === false) &&
    css`
      pointer-events: none;
    `}

  ${({ id, selectedAnswer }) =>
    selectedAnswer.state &&
    selectedAnswer.id === id &&
    css`
      background-color: var(--answer-correct);
      & #question-letters,
      & #question-value {
        color: var(--white);
      }
    `}

${({ id, selectedAnswer }) =>
    !selectedAnswer.state &&
    selectedAnswer.id === id &&
    css`
      background-color: var(--answer-wrong);
      & #question-letters,
      & #question-value {
        color: var(--white);
      }
    `}

${({ id, selectedAnswer, selectedCountry }) =>
    selectedAnswer.state === false &&
    selectedCountry.id === id &&
    css`
      background-color: var(--answer-correct);
      & #question-letters,
      & #question-value {
        color: var(--white);
      }
    `}
`;

export const QuestionBody = ({
  index,
  country,
  selectedCountry,
  selectedAnswer,
  handleSelectedAnswer,
}) => {
  const { id, name } = country;
  const questionLetters = ["A", "B", "C", "D"];

  return (
    <Option
      answer={name}
      id={id}
      selectedAnswer={selectedAnswer}
      selectedCountry={selectedCountry}
      type="button"
      onClick={() => handleSelectedAnswer(id, name)}
    >
      <QuestionLetters id="question-letters">
        {questionLetters[index]}
      </QuestionLetters>
      <QuestionValue id="question-value">{name}</QuestionValue>
      {(selectedAnswer.state === false || selectedAnswer.state === true) &&
        selectedCountry.name === name && (
          <AnswerIcon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </AnswerIcon>
        )}
      {selectedAnswer.state === false && selectedAnswer.id === id && (
        <AnswerIcon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </AnswerIcon>
      )}
    </Option>
  );
};
