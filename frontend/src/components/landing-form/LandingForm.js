import { React, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import HelpIcon from '../landing-help-icon/HelpIcon';
import {
  Wrapper,
  ColumnsWrapper,
  StartupColumn,
  FormColumn,
  TitlesWrapper,
  Title,
  Subtitle,
  Heading,
  Button,
  ButtonsWrapper,
  Form,
  LinkWrapper,
  HelpLink,
  NoFieldsMsg,
  FormSubmit,
  ActionIcon,
  MobileSubmit,
} from './styledLandingForm';
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
  SocialLink,
} from '../startup-card/styledStartupCard';
import linkedIn from '../../images/linkedin.svg';
import facebook from '../../images/facebook.svg';
import startuplogo from '../../images/startuplogo.svg';
import { SmallLink, H2 } from '../global/textStyles';

export default function LandingForm({
  user,
  setFormFields,
  formFields,
  isVisible,
  handleSubmit,
  buttonText,
  setEditSubmitText,
  appElement
}) {
  const location = useLocation();
  const [allButtons, setAllButtons] = useState([
    {
      text: 'Revenue',
      name: 'revenue',
      isSelected: false,
      helpText: 'The amount of money a startup has earned in the last period of a year.',
      cardText: '$ 120 000',
    },
    {
      text: 'Industry',
      name: 'segment',
      isSelected: false,
      helpText: 'The target market.',
      cardText: 'Health tech',
    },
    {
      text: 'Location',
      name: 'location',
      isSelected: false,
      helpText: 'The country the startup is in.',
      cardText: 'Russia, USA',
    },
    {
      text: 'Growth Speed',
      name: 'growth',
      isSelected: false,
      helpText: 'How quickly the startup is growing.',
      cardText: '100 new users a month',
    },
  ]);
  const customHelpText =
    'We can create a specific field just for you. Let’s discuss that in an email? Leave your contacts below and we will reach back to you.';

  const [defaultBtns, setDefaultBtns] = useState(allButtons);
  const [selectedBtns, setSelectedBtns] = useState([]);

  useEffect(() => {
    if (user) {
      let newDefaults = [];
      allButtons.forEach((btn) => {
        if (user.hasOwnProperty('formFields') && user.formFields.includes(btn.name)) {
          return;
        }
        btn.isSelected = false;
        newDefaults.push(btn);
      });
      setDefaultBtns(newDefaults);

      let newSelected = [];
      allButtons.forEach((btn) => {
        if (user.hasOwnProperty('formFields') && !user.formFields.includes(btn.name)) {
          return;
        }
        btn.isSelected = true;
        newSelected.push(btn);
      });
      setSelectedBtns(newSelected);
    }
  }, [user]);

  const handleBtnClick = (e) => {
    setEditSubmitText('Save edits');
    // update isSelected for button that was clicked
    const updateSelectValue = allButtons.map((btn) => {
      if (e.target.name === btn.name || e.target.id === btn.name) {
        return {
          text: btn.text,
          name: btn.name,
          isSelected: !btn.isSelected,
          helpText: btn.helpText,
          cardText: btn.cardText,
        };
      }
      return btn;
    });

    // filter selected from NOT selected
    const newDefaults = updateSelectValue.filter((btn) => {
      return btn.isSelected === false;
    });

    const newSelected = updateSelectValue.filter((btn) => {
      return btn.isSelected === true;
    });

    // set new arrays
    setAllButtons(updateSelectValue);
    setDefaultBtns(newDefaults);
    setSelectedBtns(newSelected);
  };

  const displayButtons = (buttonArr) => {
    return buttonArr.map((btn, index) => {
      return (
        <Button key={index} name={btn.name} type="button" onClick={handleBtnClick}>
          <ActionIcon $selected={btn.isSelected} id={btn.name} onClick={handleBtnClick} />
          {btn.text}
          <HelpIcon helpText={btn.helpText} custom={false} appElement={appElement} />
        </Button>
      );
    });
  };

  // update investors desired formFields when button is selected
  useEffect(() => {
    setFormFields(
      selectedBtns.map((button) => {
        return button.name;
      })
    );
  }, [selectedBtns]);

  return (
    <Wrapper>
      <TitlesWrapper $isVisible={isVisible}>
        <Title>Ready to start? We are! Create your form!</Title>
        <Subtitle>
          Add the field you want to know about the startup to the form by clicking on the field with
          a ‘+’ sign.
        </Subtitle>
      </TitlesWrapper>
      <ColumnsWrapper>
        <StartupColumn>
          <Heading>fields for your form &#8600;</Heading>
          <StartupWrapper style={{ marginBottom: 0 }}>
            <ProfileHeader>
              <ProfileImage src={startuplogo} />
              <ProfileHeaderText>
                <H2>Startup Name</H2>
                <Caption>James Brown, Los Angeles, California</Caption>
                <Caption>20 August 2021</Caption>
              </ProfileHeaderText>
            </ProfileHeader>
            <StartupIntro>
              Startup description. My startup is about finding the best products around to cook the
              best food. Suitable both for restaurants and individuals!
            </StartupIntro>
            <SmallLink href="#" target="_blank">
              startuplink.com
            </SmallLink>
            <VideoPitch>Video pitch ↘</VideoPitch>
            <VideoPlayer
              light={true}
              url="https://www.youtube.com/watch?v=7a_lu7ilpnI"
              width="100%"
            />
            <SmallLink href="#" target="_blank">
              Presentation PDF ↓
            </SmallLink>
            <Ul>
              <Li>
                <Span>Founder Info:</Span>
                <FounderDetails>
                  <div>
                    Founder Name, <Link to="#">founderemail@gmail.com</Link>
                  </div>
                  <div>
                    <SocialLink href="https://linkedin.com" rel="noreferrer" target="_blank">
                      <SocialButton style={{ backgroundImage: `url(${linkedIn})` }} />
                    </SocialLink>
                    <SocialLink href="https://facebook.com" rel="noreferrer" target="_blank">
                      <SocialButton style={{ backgroundImage: `url(${facebook})` }} />
                    </SocialLink>
                  </div>
                </FounderDetails>
              </Li>
              {selectedBtns.map((btn, index) => {
                return (
                  <Li key={index}>
                    <Span>{btn.text}:</Span>
                    {btn.cardText}
                  </Li>
                );
              })}
            </Ul>
          </StartupWrapper>
        </StartupColumn>
        <FormColumn>
          <Heading>fields for your form &#8600;</Heading>
          {defaultBtns.length !== 0 && (
            <ButtonsWrapper> {displayButtons(defaultBtns)} </ButtonsWrapper>
          )}
          <LinkWrapper defaultLength={defaultBtns.length}>
            <HelpLink>Can't find the field you need</HelpLink>
            <HelpIcon helpText={customHelpText} custom={true} appElement={appElement} />
          </LinkWrapper>
          <Form onSubmit={handleSubmit}>
            <Heading>fields you've chosen &#8600;</Heading>
            {selectedBtns.length === 0 ? (
              <NoFieldsMsg>No additional fields selected yet</NoFieldsMsg>
            ) : (
              <ButtonsWrapper>{displayButtons(selectedBtns)}</ButtonsWrapper>
            )}
            <FormSubmit type="submit" path={location.pathname}>{buttonText}</FormSubmit>
            <MobileSubmit type="submit" path={location.pathname}>{buttonText}</MobileSubmit>
          </Form>
        </FormColumn>
      </ColumnsWrapper>
    </Wrapper>
  );
}
