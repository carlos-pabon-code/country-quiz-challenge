import styled from "styled-components";
import ResultsImage from "../assets/images/results-image.svg";
import { useContext, useEffect, useState } from "react";
import { getCountries, getRandomCountry } from "../helpers/getCountries";
import { getRandomNumber } from "../helpers/getRandomNumber";
import { QuestionHeader } from "./QuestionHeader";
import { QuestionBody } from "./QuestionBody";
import { Loader } from "./Loader";
import ResultsContext from "../context/ResultsContext";

const QuestionContainer = styled.section`
  margin-top: 1rem;
  padding: 0 1rem;
  height: 100%;
  @media (min-width: 768px) {
    padding: 0 2rem;
  }
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

const ResultsContainer = styled.section`
  margin-top: 5rem;
`;

const ResultsImg = styled.img`
  width: 238px;
  height: 136px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ResultsTitle = styled.h2`
  color: var(--results-title);
  text-align: center;
  font-family: var(--title);
  font-size: 36px;
  font-weight: 700;
  margin: 2rem 0;
`;

const ResultsMessage = styled.p`
  text-align: center;
  font-family: var(--title);
  font-size: 24px;
  font-weight: 400;
`;

const Score = styled.span`
  text-align: center;
  font-family: var(--title);
  font-size: 36px;
  font-weight: 700;
  color: var(--score-color);
`;
const TryAgainButton = styled.button`
  width: 120px;
  height: 62px;
  background-color: transparent;
  color: var(--results-title);
  border: 2px solid var(--results-title);
  font-family: var(--title);
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  margin: 2rem auto;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 12px;
`;

const initialAnswerState = { id: "", state: null };
const initialScoreState = { page: 1, score: 0, limit: 5 };
export const CountryQuestion = () => {
  //useState to save the four random country obtained from the API
  const [countries, setCountries] = useState("");
  //useState to save a random country to build the question
  const [selectedCountry, setSelectedCountry] = useState("");
  //useState to select a type of question depending a random number generated (1=>capital question, 2=>flag question)
  const [questionType, setQuestionType] = useState(null);
  //useState to control if the answer selected by the user is right or wrong
  const [selectedAnswer, setSelectedAnswer] = useState(initialAnswerState);
  //useState to show a Loader while the data is fetched from the API
  const [isLoading, setIsLoading] = useState(true);
  //useContext to store the current page, score obtained and page limit
  const { results, setResults } = useContext(ResultsContext);

  /**
   * sets an object with a random country data
   * @param {array} countries array with four random countries
   */
  const searchRandomCountry = (countries) => {
    const randomCountry = getRandomCountry(countries);
    setSelectedCountry(randomCountry);
  };

  // Get random type question (1:capital question, 2:flag question)
  const getQuestionType = () => {
    setQuestionType(getRandomNumber(1, 2));
  };

  // Get 1 random country to build the question
  const getRandomCountries = async () => {
    const countries = await getCountries();
    setCountries(countries);
    getQuestionType();
    searchRandomCountry(countries);
    setIsLoading(false);
  };

  /**
   * Change the state of the selected answer to apply styles after depending on the result
   * @param {string} id country id(code of the country)
   * @param {string} selectedAnswer Clicked answer by the user
   */
  const handleSelectedAnswer = (id, selectedAnswer) => {
    if (selectedAnswer === selectedCountry.name) {
      setResults({ ...results, score: results.score + 1 });
      setSelectedAnswer({ id, state: true });
    } else {
      setSelectedAnswer({ id, state: false });
    }
  };

  /**
   * Shows next question after the user clicks the next button
   */
  const showNextQuestion = () => {
    setIsLoading(true);
    setResults({ ...results, page: results.page + 1 });
    setSelectedAnswer(initialAnswerState);
    getRandomCountries();
  };

  const startAgain = () => {
    setIsLoading(true);
    setResults(initialScoreState);
    setSelectedAnswer(initialAnswerState);
    getRandomCountries();
  };

  useEffect(() => {
    getRandomCountries();
  }, []);

  return (
    <QuestionContainer>
      {isLoading && <Loader />}
      {!isLoading && results.page <= results.limit && (
        <>
          <QuestionHeader
            questionType={questionType}
            selectedCountry={selectedCountry}
          />
          {selectedCountry &&
            countries.map((country, index) => (
              <QuestionBody
                key={country.id}
                index={index}
                country={country}
                selectedAnswer={selectedAnswer}
                selectedCountry={selectedCountry}
                handleSelectedAnswer={handleSelectedAnswer}
              />
            ))}
          <QuestionFooter>
            <QuestionPage>
              {results.page}/{results.limit}
            </QuestionPage>
            {selectedAnswer.state !== null && (
              <NextButton type="button" onClick={showNextQuestion}>
                Next
              </NextButton>
            )}
          </QuestionFooter>
        </>
      )}
      {results.page > results.limit && !isLoading && (
        <ResultsContainer>
          <figure>
            <ResultsImg src={ResultsImage} />
          </figure>
          <ResultsTitle>Results</ResultsTitle>
          <ResultsMessage>
            You got <Score>{results.score}</Score> correct answers
          </ResultsMessage>
          <TryAgainButton type="button" onClick={startAgain}>
            Try again
          </TryAgainButton>
        </ResultsContainer>
      )}
    </QuestionContainer>
  );
};
