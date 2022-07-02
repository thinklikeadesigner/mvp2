import styled from 'styled-components/macro';
import { H1, LargeCaption, SmallText } from '../global/textStyles';
import {
  FounderContainer,
  FounderOverlay,
  FounderSmallText,
  PlayIcon,
} from '../landing/styledLanding';

export const StartupPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const HeadingContainer = styled.div`
  max-width: 100%;
  margin-top: 93px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StartupTitle = styled(H1)`
  margin-bottom: 30px;
  text-align: center;

  @media (max-width: 1025px) {
    font-size: 38px;
    line-height: 46px;
  }
`;

export const StartupCaption = styled(LargeCaption)`
  @media (max-width: 1025px) {
    font-size: 20px;
    line-height: 28px;
    text-align: center;
  }
`;

export const FounderContainerStartup = styled.div`
  display: flex;
  justify-content: end;
  height: 191px;
  position: relative;
  z-index: 1;

  flex-direction: column;
  align-items: end;
  justify-content: space-between;
  height: 454px;
  width: 100%;
  position: absolute;
  top: 309px;
  right: 0;

  @media (max-width: 1025px) {
    position: static;
    align-items: center;
    flex-direction: column-reverse;
    margin-top: 40px;
    margin-bottom: 0px;
  }
`;

export const FounderSmallTextStartup = styled(SmallText)`
  padding: 12px 20px;
  width: 233px;
  background: rgba(255, 255, 255, 0.5);
  box-shadow: inset 2px -2px 4px rgba(0, 0, 0, 0.16);
  backdrop-filter: blur(10px);
  border-radius: 10px;
  max-height: 84px;
  margin-right: 0;
  margin-bottom: 16px;

  @media (max-width: 1025px) {
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    margin-bottom: 0px;
  }
`;

export const FounderImageWrap = styled.div`
  width: 193px;
  height: 342px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 28px 18px -12px rgba(0, 0, 0, 0.5);
  position: relative;
  cursor: pointer;

  &:hover ${FounderOverlay} {
    background-color: rgba(0, 0, 0, 0);
  }

  /* TODO check in with Danila  I like this but it's not in the design
   &:hover ${PlayIcon} {
    width: 26px;
  }  */
`;
