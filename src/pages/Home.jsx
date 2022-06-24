import styled from "styled-components";
import { Card } from "../components/Card";

const HomeContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  margin-top: 3rem;
`;

export const Home = () => {
  return (
    <HomeContainer>
      <Card />
    </HomeContainer>
  );
};
