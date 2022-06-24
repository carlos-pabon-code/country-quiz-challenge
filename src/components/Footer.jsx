import styled from "styled-components";

const FooterContainer = styled.footer`
  width: 100%;
  height: 80px;
  text-align: center;
  position: absolute;
  left: 0;
  bottom: 0;
  margin-bottom: -300px;
  font-family: var(--paragraph);
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1.6;
`;
const FooterText = styled.span`
  color: var(--soft-color);
  font-weight: 500;
`;
const BoldText = styled.span`
  font-weight: 700;
`;

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>
        created by <BoldText>carlos.pabon.code</BoldText> - devChallenges.io
      </FooterText>
    </FooterContainer>
  );
};
