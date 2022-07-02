import styled from 'styled-components/macro';

export const AppContainer = styled.div`
  padding: 20px 40px 80px;
  max-width: 1440px;
  min-width: 320px;
  margin: 0 auto;
  overflow: hidden;
  position: relative;

  @media (max-width: 768px){
    padding: 20px 20px 60px;
  }
  @media (max-width: 480px){
    padding: 16px 16px 46px;
  }
  @media (max-width: 374px){
    padding: 12px 6px 40px;
  }
`;
