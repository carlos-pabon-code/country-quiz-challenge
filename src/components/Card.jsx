import styled from "styled-components";
import TopCardImage from "../assets/images/card-image.svg";

const CardContainer = styled.section`
  background-color: var(--white);
  height: 515px;
  width: 464px;
  border-radius: 24px;
  display: flex;
  align-items: top;
  justify-content: space-between;
`;
const CardTitle = styled.h2`
  margin-top: -4rem;
  text-transform: uppercase;
  color: var(--soft-color);
  font-family: var(--title);
  font-size: 36px;
`;
const CardImage = styled.img`
  width: 140px;
  margin-top: -4rem;
`;

export const Card = () => {
  return (
    <CardContainer>
      <CardTitle>Country Quiz</CardTitle>
      <figure>
        <CardImage src={TopCardImage} alt="card-image" />
      </figure>
    </CardContainer>
  );
};
