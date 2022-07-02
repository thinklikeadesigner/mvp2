import styled from 'styled-components/macro';

export const StyledInvestorFeed = styled.div`
  display: flex;
  margin-top: 79px;
  gap: 40px;
  width: 100%;

  @media (max-width: 860px) {
    flex-direction: column;
    padding: 0 32px;
    margin-top: 60px;
    align-items: center;
  }

  @media (max-width: 600px) {
    padding: 0;
    margin-top: 40px;
  }

  @media (max-width: 374px) {
    margin-top: 100px;
    width: 100%;
  }
`;

export const StartupCardContainer = styled.div`
  max-width: 660px;
  width: 100%;
  margin: 0 0 175px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 860px) {
    max-width: none;
    min-width: 100%;
  }
`;
