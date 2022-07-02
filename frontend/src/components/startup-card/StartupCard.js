import React from 'react';
import { Link } from 'react-router-dom';
import {
  Caption,
  StartupWrapper,
  ProfileHeader,
  ProfileImage,
  StartupIntro,
  VideoPlayer,
  SocialButton,
  ProfileHeaderText,
  VideoPitch,
  Ul,
  Li,
  Span,
  FounderDetails,
  ProfileTitle,
  StartupLink,
  SocialIcons,
  SocialLink,
  FounderEmail,
} from './styledStartupCard';
import linkedIn from '../../images/linkedin.svg';
import facebook from '../../images/facebook.svg';
import moment from 'moment';
import { REGIONS, SEGMENTS } from '../../utils/configData.json';

function StartupCard({
  logo,
  name,
  description,
  url,
  pitchUrl,
  presentationDeck,
  founder,
  founderEmail,
  founderFacebook,
  founderLinkedIn,
  revenue,
  segment,
  location,
  growth,
  createdAt,
}) {
  const [founderUrl, setFounderUrl] = React.useState(url);
  const [facebookUrl, setFacebookUrl] = React.useState(founderFacebook);
  const [linkedInUrl, setLinkedInUrl] = React.useState(founderLinkedIn);
  const date = moment(createdAt).format('Do MMMM, YYYY');
  const revenueFormatted = (revenue * 1000).toLocaleString('en-US');

  React.useEffect(() => {
    transformUrl(founderLinkedIn, setLinkedInUrl);
    transformUrl(founderFacebook, setFacebookUrl);
    transformUrl(url, setFounderUrl);
  }, [founderFacebook, founderLinkedIn, url]);

  // Verify that url contains https://
  function transformUrl(url, setter) {
    if (!url) {
      return;
    }
    // Skip this if Facebook Url already contains http prefix
    if (url.includes('http://') || url.includes('https://')) {
      return;
    }
    setter(`https://${url}`);
  }

  function transformValue(array, value) {
    const index = array.find((item) => item.value === value);
    return index ? index.textContent : 'Not available';
  }

  return (
    <StartupWrapper>
      <ProfileHeader>
        <ProfileImage src={logo} />
        <ProfileHeaderText>
          <ProfileTitle>{name}</ProfileTitle>
          <Caption>
            {founder}, {transformValue(REGIONS, location)}
          </Caption>
          <Caption>{date}</Caption>
        </ProfileHeaderText>
      </ProfileHeader>

      <StartupIntro>{description}</StartupIntro>
      <StartupLink href={founderUrl} target="_blank" rel="noopener noreferrer">
        {url}
      </StartupLink>
      <VideoPitch>Video pitch ↘</VideoPitch>
      <VideoPlayer light={true} url={pitchUrl} width="100%" />

      <StartupLink href={presentationDeck} target="_blank">
        Presentation PDF ↓
      </StartupLink>

      <Ul>
        <Li>
          <Span>Founder Info:</Span>
          <FounderDetails>
            <div>
              {founder}
              <FounderEmail
                target="_blank"
                rel="noopener noreferrer"
                href={`mailto:${founderEmail}`}
              >{` ${founderEmail}`}</FounderEmail>
            </div>
            <SocialIcons>
              {founderLinkedIn && (
                <SocialLink href={linkedInUrl} rel="noopener noreferrer" target="_blank">
                  <SocialButton style={{ backgroundImage: `url(${linkedIn})` }} />
                </SocialLink>
              )}
              {founderFacebook && (
                <SocialLink href={facebookUrl} rel="noopener noreferrer" target="_blank">
                  <SocialButton style={{ backgroundImage: `url(${facebook})` }} />
                </SocialLink>
              )}
            </SocialIcons>
          </FounderDetails>
        </Li>

        {revenue && (
          <Li>
            <Span>Annual Revenue:</Span>${revenueFormatted}
          </Li>
        )}
        {segment && (
          <Li>
            <Span>Industry:</Span>
            {transformValue(SEGMENTS, segment)}
          </Li>
        )}
        {location && (
          <Li>
            <Span>Location:</Span>
            {transformValue(REGIONS, location)}
          </Li>
        )}
        {growth && (
          <Li>
            <Span>New Users per Month:</Span> {growth}
          </Li>
        )}
      </Ul>
    </StartupWrapper>
  );
}

export default StartupCard;
