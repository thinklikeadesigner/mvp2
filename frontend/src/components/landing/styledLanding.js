import styled from 'styled-components/macro';
import { H1, H2, LargeCaption, SmallText } from '../global/textStyles';
import ReactPlayer from 'react-player';

export const LandingContainer = styled.section`
  padding-top: 100px;
  position: relative;

  @media (max-width: 1024px) {
    padding-top: 86px;
  }
  @media (max-width: 480px) {
    padding-top: 60px;
  }
  @media (max-width: 374px) {
    padding-top: 124px;
  }
`;

export const Heading = styled(H1)`
  text-align: center;
  margin-bottom: 30px;
  letter-spacing: -0.01em;

  @media (max-width: 480px) {
    font-size: 38px;
    font-style: normal;
    font-weight: 700;
    line-height: 46px;
    margin-bottom: 20px;
  }
`;

export const SubHeading = styled(LargeCaption)`
  text-align: center;
  margin: 0 auto;
  margin-bottom: 50px;
  max-width: 540px;

  @media (max-width: 480px) {
    font-size: 20px;
    font-weight: 400;
    line-height: 28px;
    margin-bottom: 40px;
  }
`;

export const FounderContainer = styled.div`
  display: flex;
  justify-content: end;
  height: 191px;
  position: relative;
  z-index: 1;

  @media (max-width: 960px) {
    height: auto;
    margin-bottom: 102px;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    margin-bottom: 355px;
  }
`;

export const FounderSmallText = styled(SmallText)`
  padding: 12px 20px;
  width: 233px;
  background: rgba(255, 255, 255, 0.5);
  box-shadow: inset 2px -2px 4px rgba(0, 0, 0, 0.16);
  backdrop-filter: blur(10px);
  border-radius: 10px;
  max-height: 84px;
  margin-right: 40px;

  @media (max-width: 768px) {
    margin-right: 20px;
  }

  @media (max-width: 480px) {
    order: 1;
    margin: 32px auto 0 auto;
  }
`;

export const FounderImage = styled.img`
  width: 193px;
  height: 342px;
`;

export const VideoModal = styled.div`
  visibility: ${(props) => (props.$show ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.$show ? 1 : 0)};
  position: fixed;
  top: 0;
  left: 0;
  min-width: 100vw;
  min-height: 100vh;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  transition: visibility 0.3s ease, opacity 0.3s ease;
`;

export const VideoWrapper = styled.div`
  position: relative;
  /* width: 331px; */
  height: 620px;
  box-shadow: 0 28px 18px -12px rgba(0, 0, 0, 0.5);

  @media (max-width: 480px) {
    width: 262px;
    height: 545.28px;
  }
`;

export const Video = styled(ReactPlayer)`
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
`;

export const Close = styled.img`
  position: absolute;
  top: 0;
  right: -40px;
  width: 20px;
  height: 20px;
  cursor: pointer;
  transition: opacity 0.15s ease;
  &:hover {
    opacity: 0.7;
  }

  @media (max-width: 480px) {
    right: 0;
    top: -40px;
  }
`;

export const FounderOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  transition: background-color 0.3s ease;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PlayIcon = styled.img`
  width: 24px;
  height: 24px;
  /* transition: width 0.05s ease; */
`;

export const FounderImageWrapper = styled.div`
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

  @media (max-width: 480px) {
    order: 0;
    margin: 0 auto;
  }

  /* TODO check in with Danila  I like this but it's not in the design
   &:hover ${PlayIcon} {
    width: 26px;
  }  */
`;

export const Cards = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 396px;

  @media (max-width: 1024px) {
    margin-bottom: 383px;
  }
  @media (max-width: 768px) {
    margin-bottom: 445px;
  }
  @media (max-width: 480px) {
    margin-bottom: 468px;
  }
`;

export const Card1 = styled.div`
  max-width: 660px;
  min-width: 288px;
  margin-bottom: 40px;
  background: rgba(255, 255, 255, 0.5);
  box-shadow: inset -4px 4px 4px rgba(255, 255, 255, 0.75),
    inset 2px -4px 4px rgba(108, 108, 108, 0.25);
  backdrop-filter: blur(10px);
  border-radius: 30px;
  padding: 40px 72px 40px 40px;

  @media (max-width: 480px) {
    margin-bottom: 30px;
    padding: 60px 20px 40px;
  }
`;

export const Card2 = styled(Card1)`
  align-self: flex-end;
  margin-bottom: 60px;

  @media (max-width: 768px) {
    margin-bottom: 179px;
  }
  @media (max-width: 480px) {
    margin-bottom: 145px;
  }
`;

export const Card3 = styled(Card1)`
  margin-bottom: 60px;

  @media (max-width: 768px) {
    margin-bottom: 160px;
  }
  @media (max-width: 480px) {
    margin-bottom: 175px;
  }
`;

export const Card4 = styled(Card2)`
  margin-bottom: 0;
`;

export const CardHeading = styled(H2)`
  margin-bottom: 32px;
  max-width: ${(props) => props.$width};

  @media (max-width: 480px) {
    margin-bottom: 20px;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 32px;
  }
`;

export const CardListItem = styled.li`
  font-family: 'Inter', sans-serif;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  color: #000000;
  margin: 0;
  padding: 0;

  @media (max-width: 480px) {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
  }
`;

export const CardSmallText = styled(SmallText)`
  @media (max-width: 480px) {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
  }
`;

export const CardList = styled.ul`
  margin: 0;
  margin-top: 32px;
  padding: 0;
  list-style: none;

  @media (max-width: 480px) {
    margin-top: 18px;
  }
`;

export const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
`;

export const FloatingIcon = styled.img`
  width: ${(props) => props.width};
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
`;

export const PurpleBar = styled.img`
  width: 130.31px;
  height: 102.2px;
  position: absolute;
  top: 10.38%;
  left: 19.49%;

  @media (max-width: 1024px) {
    top: 10.82%;
    left: 5.3%;
  }
  @media (max-width: 768px) {
    top: 9.86%;
    left: -14.97%;
  }
  @media (max-width: 480px) {
    top: 16.02%;
    left: -26.82%;
  }
`;

export const PurpleTasks = styled(PurpleBar)`
  width: 275px;
  height: 328.25px;
  left: 40%;

  @media (max-width: 1024px) {
    left: 34.64%;
  }
  @media (max-width: 768px) {
    left: 4.4%;
  }
  @media (max-width: 480px) {
    top: 16.99%;
    left: -0.087%;
  }
`;

export const PurpleBarGroup = styled.img`
  position: absolute;
  width: 218.61px;
  height: 156.32px;
  top: 16.85%;
  right: 20.69%;

  @media (max-width: 1024px) {
    top: 16.85%;
    right: 8.73%;
  }
  @media (max-width: 768px) {
    top: 15.43%;
    right: 22.44%;
  }
  @media (max-width: 480px) {
    top: 17.82%;
    right: -39.54%;
  }
`;

export const Eyes = styled(PurpleBar)`
  width: 218px;
  height: 171px;
  top: 28.58%;
  left: 29.93%;

  @media (max-width: 1024px) {
    top: 28.03%;
    left: 4.24%;
  }
  @media (max-width: 768px) {
    top: 35.59%;
    left: 54.26%;
  }
  @media (max-width: 480px) {
    top: 35.11%;
    left: 29.15%;
  }
`;

export const Stars = styled.div`
  position: absolute;
  width: 193px;
  height: 187px;
  top: 37.27%;
  right: 16.18%;

  @media (max-width: 1024px) {
    top: 35.96%;
    right: 3.5%;
  }
  @media (max-width: 768px) {
    top: 45.6%;
    right: 63.19%;
  }
  @media (max-width: 480px) {
    top: 43.74%;
    right: 34.69%;
  }
`;

export const SmallStar = styled(PurpleBar)`
  width: 63.42px;
  height: 76px;
  top: 0;
  left: 0;
`;

export const BigStar = styled.img`
  width: 132px;
  height: 160px;
  position: absolute;
  bottom: 0;
  right: 0;
`;

export const Phone = styled(PurpleBar)`
  width: 313.59px;
  height: 414.17px;
  top: 42%;
  left: 16.18%;

  @media (max-width: 1024px) {
    top: 41.82%;
    left: 4.2%;
  }
  @media (max-width: 768px) {
    top: 52.34%;
    left: 53.16%;
  }
  @media (max-width: 480px) {
    top: 50.03%;
    left: 7%;
  }
`;
