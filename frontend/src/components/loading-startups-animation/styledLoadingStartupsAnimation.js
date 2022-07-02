import styled, { keyframes } from 'styled-components/macro';
import { H2 } from '../global/textStyles';

export const LoadingStartupsContainer = styled.div`
  width: 660px;
  height: 892px;
  background-color: #dadada;
  border-radius: 30px;
  overflow: auto;

  @media (max-width: 1024px) {
    margin-top: 21px;
    max-width: 452px;
    max-height: 692px;
    padding: 21px 20px;
  }
  @media (max-width: 770px) {
    margin: 0 auto;
    padding: 20px 20px;
  }
`;

export const Title = styled(H2)`
  margin: 60px auto 0 auto;
  text-align: center;
  box-sizing: border-box;

  @media (max-width: 770px) {
    font-size: 24px;
    line-height: 32px;
  }
`;

export const LoaderSpin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Loader = styled.div`
  border: 8px solid #f3f3f3;
  border-top: 8px solid #7000ff;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  margin: 40px auto 0;
  animation: ${LoaderSpin} 2s linear infinite;
`;
