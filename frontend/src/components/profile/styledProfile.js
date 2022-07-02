import styled from 'styled-components/macro';
import { H1, LargeCaption } from '../global/textStyles';
import { Link } from 'react-router-dom';
import { FacebookShareButton, LinkedinShareButton } from 'react-share';

export const Section = styled.section`
  min-height: 76vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled(H1)`
  margin-top: 194px;
  margin-bottom: 60px;
  text-align: center;
  max-width: 736px;

  @media (max-width: 440px) {
    margin-top: 100px;
    margin-bottom: 32px;
    font-size: 36px;
    line-height: 42px;
    // overflow
    width: 100%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  @media (max-width: 374px) {
    margin-top: 164px;
    margin-bottom: 28px;
  }
`;

export const Subtitle = styled(LargeCaption)`
  text-align: center;
  text-align: center;
  max-width: 736px;

  @media (max-width: 440px) {
    font-size: 20px;
    line-height: 24px;
  }
`;

export const LinkUrl = styled(Link)`
  text-align: center;
  font-weight: normal;
  font-size: 24px;
  line-height: 32px;
  margin-bottom: 32px;

  &:hover {
    text-decoration: none;
  }

  @media (max-width: 440px) {
    font-size: 16px;
    margin-bottom: 28px;
  }
`;

export const ShareContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  align-items: center;
  text-align: center;
  margin-bottom: ${(props) => (props.$showDelete ? '0' : '360px')};

  @media (max-width: 440px) {
    gap: 0;
  }
`;

export const IconContainer = styled.div``;

export const SocialIcon = styled.div`
  width: 28px;
  height: 28px;
  background-image: url(${(props) => props.source});
  background-size: contain;
  background-position: center;
  border: none;
`;

export const StyledFacebookShare = styled(FacebookShareButton)`
  display: inline-block;
  width: 28px;
  height: 28px;
  cursor: pointer;
  margin-right: 16px;
  &:last-of-type {
    margin: 0;
  }
`;
export const StyledLinkedinShare = styled(LinkedinShareButton)`
  display: inline-block;
  width: 28px;
  height: 28px;
  cursor: pointer;
  margin-right: 16px;
  &:last-of-type {
    margin: 0;
  }
`;
export const CopyIcon = styled.img`
  width: 28px;
  height: 28px;
  margin-left: 10px;
`;

export const CopyContainer = styled.button`
  display: flex;
  justify-content: space-between;
  background-color: transparent;
  align-items: center;
  border: none;
  cursor: pointer;
  color: #7000ff;
  &:hover {
    text-decoration: underline;
  }
`;

export const CopyAlert = styled.div`
  padding: 16px 40px;
  background-color: rgba(0, 0, 0, 0.6);
  color: #fff;
  border-radius: 20px;
  opacity: ${(props) => (props.$show ? 1 : 0)};
  visibility: ${(props) => (props.$show ? 'visible' : 'hidden')};
  transition: opacity 0.3s ease, visibility 0.3s ease;
  /* margin-top: 186px; */
  position: fixed;
  bottom: 25%;
  z-index: 10;
`;

export const DeleteButton = styled.button`
  color: #ea4335;
  margin-top: 220px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 160px;

  @media (max-width: 440px) {
    margin-top: 100px;
  }
`;
