import styled from "styled-components";

const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  min-height: 380px;
  padding-top: 2rem;
`;

export const Loader = () => {
  return (
    <LoaderContainer>
      <div className="loader">
        <p>Loading...</p>
      </div>
    </LoaderContainer>
  );
};
