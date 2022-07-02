import styled from 'styled-components/macro';
import { SmallCaps, SmallText, H2, SmallLink } from '../global/textStyles';
import ReactPlayer from 'react-player';

export const StartupWrapper = styled.div`
  background: #ffffff;
  box-shadow: inset -4px 4px 4px rgba(0, 0, 0, 0.05), inset 3px -5px 4px rgba(96, 96, 96, 0.2);
  backdrop-filter: blur(20px);
  border-radius: 30px;
  padding: 44px 40px;
  margin-bottom: 32px;
  width: 100%;
  max-width: 100%;

  @media (max-width: 1025px) {
    padding: 21px 20px;
  }

  @media (max-width: 860px) {
    margin: 0 auto 40px;
    padding: 44px 40px;
  }

  @media (max-width: 480px) {
    margin: 0 auto 40px;
    padding: 20px 20px;
  }
`;

export const ProfileHeader = styled.div`
  display: flex;
  padding-bottom: 32px;

  @media (max-width: 860px) {
  }
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ProfileHeaderText = styled.div`
  padding: 0px 20px;

  @media (max-width: 860px) {
  }
  @media (max-width: 480px) {
    text-align: center;
    font-size: 24px;
    line-height: 32px;
  }
`;

export const Caption = styled(SmallText)`
  font-size: 12px;
`;

export const StartupIntro = styled(SmallText)`
  margin-bottom: 16px;

  @media (max-width: 860px) {
    margin-bottom: 20px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    line-height: 18px;
  }
`;

export const StartupLink = styled(SmallLink)`
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 460px;

  @media (max-width: 768px) {
    max-width: 320px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    line-height: 18px;
    max-width: 280px;
  }

  @media (max-width: 480px) {
    max-width: 240px;
  }
`;

export const VideoPitch = styled(SmallCaps)`
  margin-top: 32px;
  margin-bottom: 7px;

  @media (max-width: 860px) {
    font-size: 14px;

  @media (max-width: 480px) {
    font-size: 12px;

`;

export const VideoPlayer = styled(ReactPlayer)`
  max-width: 580px;
  max-height: 310px;
  border-radius: 10px;
  overflow: hidden;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
  margin: 0 auto;
  margin-bottom: 32px;

  @media (max-width: 1025px) {
    max-width: 412px;
    max-height: 220px;
  }
  @media (max-width: 860px) {
    max-width: 580px;
    max-height: 310px;
  }

  @media (max-width: 680px) {
    max-width: 580px;
    max-height: 260px;
  }
  @media (max-width: 480px) {
    max-width: 303px;
    max-height: 162px;
  }
`;

export const ProfileImage = styled.img`
  height: 80px;
  width: 80px;
  border-radius: 50%;
  object-fit: cover;

  @media (max-width: 480px) {
    height: 60px;
    width: 60px;
  }
`;

export const Ul = styled.ul`
  margin: 0;
  list-style: none;
  padding: 0;
`;

export const Li = styled.li`
  font-weight: bold;
  font-size: 20px;
  line-height: 30px;
  margin-top: 32px;

  @media (max-width: 860px) {
    margin-top: 20px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    line-height: 18px;
    margin-bottom: 20px;
  }
`;
export const Span = styled.span`
  font-family: 'Inter', sans-serif;
  font-weight: bold;
  font-size: 14px;
  line-height: 30px;
  text-transform: uppercase;
  color: #50555c;
  margin-right: 16px;
  padding: 0;

  @media (max-width: 480px) {
    font-size: 12px;
    line-height: 20px;
    margin-right: 10px;
  }
`;

export const SocialButton = styled.button`
  height: 100%;
  width: 100%;
  background-size: contain;
  background-color: transparent;
  background-repeat: no-repeat;
  border: none;
  margin-right: 10px;
  padding: 0;
  cursor: pointer;
  margin-bottom: 0;
`;

export const FounderDetails = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 8px;
`;

export const ProfileTitle = styled(H2)`
  @media (max-width: 860px) {
    font-size: 24px;
    line-height: 32px;
    margin: 8px 0px 10px;
  }
`;

export const SocialIcons = styled.div``;

export const SocialLink = styled.a`
  display: inline-block;
  height: 24px;
  width: 24px;
  margin-right: 8px;
  @media (max-width: 480px) {
    height: 20px;
    width: 20px;
  }
`;

export const FounderEmail = styled.a`
  @media (max-width: 768px) {
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 360px;
  }
`;
