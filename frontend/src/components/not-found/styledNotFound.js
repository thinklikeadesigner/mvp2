import styled from 'styled-components/macro';

export const Container = styled.section`
  height: 65vh;
  padding: 80px 36px 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: 480px){
    height: 75vh;
  }
`;
export const Heading = styled.h1`
  margin: 0;
  font-size: 140px;
  text-align: center;
  width: 100%;
  @media (max-width: 768px) {
    font-size: 72px;
  }
`;
export const SubHeading = styled.h2`
  margin: 0;
  text-align: center;
  width: 100%;
  margin-bottom: 8px;
`;
export const Paragraph = styled.p`
  margin: 0;
  text-align: center;
  width: 100%;
`;
