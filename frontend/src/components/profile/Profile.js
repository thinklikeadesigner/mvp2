import React from 'react';
import eyes from '../../images/eyes.png';
import phone from '../../images/phone.png';
import facebook from '../../images/facebook.svg';
import linkedIn from '../../images/linkedin.svg';
import copy from '../../images/copy.svg';
import DeleteProfileModal from '../delete-profile-modal/DeleteProfileModal';
import { Background, FloatingIcon } from '../landing/styledLanding';

import {
  Section,
  Title,
  Subtitle,
  LinkUrl,
  ShareContainer,
  CopyContainer,
  IconContainer,
  SocialIcon,
  CopyIcon,
  CopyAlert,
  DeleteButton,
  StyledFacebookShare,
  StyledLinkedinShare,
} from './styledProfile';

export default function Profile({
  title,
  subtitle,
  showDelete,
  formPath,
  showBackground,
  deleteInvestor,
}) {
  const [showCopied, setShowCopied] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);

  const { REACT_APP_FRONTEND_URL } = process.env;

  // copy provided link text to clipboard when the copy button is clicked
  function handleCopy() {
    navigator.clipboard
      .writeText(`${REACT_APP_FRONTEND_URL}/${formPath}`)
      .then(() => {
        showCopyMessage();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function showCopyMessage() {
    setShowCopied(true);
    setTimeout(() => {
      setShowCopied(false);
    }, 3000);
  }
  return (
    <Section>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      <LinkUrl to={`/${formPath}`}>{`${REACT_APP_FRONTEND_URL}/${formPath}`}</LinkUrl>
      <ShareContainer $showDelete={showDelete}>
        <CopyContainer onClick={handleCopy}>
          Copy
          <CopyIcon src={copy} alt="copy" />
        </CopyContainer>
        or share
        <IconContainer>
          <StyledFacebookShare
            // unable to share using localhost, so the prod url is used here
            url={`https://peaceful-woodland-39661.herokuapp.com/form/${formPath}`}
            quote={
              "Looking for Venture Capital funding? Fill out this form and let's make your startup dreams come true!"
            }
            hashtag="#startups"
          >
            <SocialIcon source={facebook} alt="facebook" />
          </StyledFacebookShare>
          <StyledLinkedinShare
            // unable to share using localhost, so the prod url is used here
            url={`https://peaceful-woodland-39661.herokuapp.com/form/${formPath}`}
            // LinkedIn's api no longer allows for title's and summaries as it used to
          >
            <SocialIcon source={linkedIn} alt="linkedin" />
          </StyledLinkedinShare>
        </IconContainer>
      </ShareContainer>
      <CopyAlert $show={showCopied}>Link copied to clipboard!</CopyAlert>
      {showDelete && <DeleteButton onClick={() => setIsOpen(true)}>Delete profile</DeleteButton>}
      {showBackground && (
        <Background>
          <FloatingIcon src={eyes} alt="eyes" width="266px" top="42px" left="60%" />
          <FloatingIcon src={phone} alt="phone" width="348px" top="454px" left="-6%" />
        </Background>
      )}
      <DeleteProfileModal isOpen={isOpen} setIsOpen={setIsOpen} deleteInvestor={deleteInvestor} />
    </Section>
  );
}
