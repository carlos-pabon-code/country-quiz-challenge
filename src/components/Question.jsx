import styled, { css } from "styled-components";
import { useEffect, useState } from "react";
import { getCountries } from "../helpers/getCountries";

const QuestionContainer = styled.section`
  margin-top: 1rem;
  padding: 0 1rem;
  height: 100%;
  @media (min-width: 768px) {
    padding: 0 2rem;
  }
`;

const QuestionTitle = styled.h3`
  color: var(--results-title);
  font-family: var(--title);
  margin-bottom: 1rem;
  font-size: 18px;
  @media (min-width: 768px) {
    font-size: 24px;
  }
`;

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
    padding: 0 3rem 0 1rem;
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

const Flag = styled.img`
  height: 54px;
  width: 84px;
  margin-bottom: 0.5rem;
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

const QuestionFooter = styled.section`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  left: 0;
  bottom: 0;
  margin-bottom: 0.2rem;
  height: 80px;
  padding: 0 1rem;
  @media (min-width: 768px) {
    padding: 0 2rem;
  }
`;

const QuestionPage = styled.p`
  color: var(--results-title);
  font-family: var(--title);
  font-size: 16px;
  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

const NextButton = styled.button`
  background-color: var(--answer-hover);
  border-radius: 12px;
  width: 116px;
  height: 56px;
  border: none;
  cursor: pointer;
  color: var(--white);
  font-family: var(--title);
  font-weight: 700;
  font-size: 16px;
  @media (min-width: 768px) {
    font-size: 18px;
    width: 116px;
    height: 56px;
  }
`;

const initialAnswerState = { id: "", state: null };

export const Question = () => {
  const questionLetters = ["A", "B", "C", "D"];
  //useState to save the four random country obtained from the API
  const [countries, setCountries] = useState("");
  //useState to save a random country to build the question
  const [selectedCountry, setSelectedCountry] = useState("");
  //useState to select a type of question depending a random number generated (1=>capital question, 2=>flag question)
  const [questionType, setQuestionType] = useState(null);
  //useState to control if the answer selected by the user is right or wrong
  const [selectedAnswer, setSelectedAnswer] = useState(initialAnswerState);

  const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const getRandomCountry = (countries) => {
    const randomCountry = getRandomNumber(0, 3);
    setSelectedCountry(countries[randomCountry]);
  };

  const getRandomCountries = async () => {
    const countries = await getCountries();
    setCountries(countries);
    setQuestionType(getRandomNumber(1, 2));
    getRandomCountry(countries);
  };

  const handleSelectedAnswer = (id, selectedAnswer) => {
    selectedAnswer === selectedCountry.name
      ? setSelectedAnswer({ id, state: true })
      : setSelectedAnswer({ id, state: false });
  };

  const showNextQuestion = () => {
    getRandomCountries();
    setSelectedAnswer(initialAnswerState);
  };

  useEffect(() => {
    getRandomCountries();
  }, []);

  return (
    <QuestionContainer style={{ display: "block" }}>
      {questionType === 2 && <Flag src={selectedCountry?.flag} />}
      {selectedCountry && questionType === 1 ? (
        <QuestionTitle>
          {selectedCountry.capital} is the capital of?
        </QuestionTitle>
      ) : (
        <QuestionTitle>Which country this flag belongs to?</QuestionTitle>
      )}
      {selectedCountry &&
        countries.map(({ id, name }, index) => (
          <div key={id}>
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
              {(selectedAnswer.state === false ||
                selectedAnswer.state === true) &&
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
          </div>
        ))}
      <QuestionFooter>
        <QuestionPage>1/4</QuestionPage>
        {selectedAnswer.state !== null && (
          <NextButton type="button" onClick={showNextQuestion}>
            Next
          </NextButton>
        )}
      </QuestionFooter>
    </QuestionContainer>
  );
};
