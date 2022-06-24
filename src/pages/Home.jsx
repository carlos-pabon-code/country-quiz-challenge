import styled from "styled-components";
import { Card } from "../components/Card";
import { Footer } from "../components/Footer";

const HomeContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;
  margin: 6rem 0;
  @media (min-width: 768px) {
    margin: 2rem 0;
  }
`;

export const Home = () => {
  return (
    <HomeContainer>
      <main role="main">
        <Card />
      </main>
      <Footer />
    </HomeContainer>
  );
};
