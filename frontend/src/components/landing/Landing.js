import {
  Heading,
  SubHeading,
  FounderContainer,
  FounderSmallText,
  FounderImage,
  Cards,
  Card1,
  Card2,
  Card3,
  Card4,
  CardHeading,
  CardSmallText,
  CardList,
  Video,
  VideoModal,
  VideoWrapper,
  Close,
  FounderImageWrapper,
  FounderOverlay,
  PlayIcon,
  LandingContainer,
  CardListItem,
  PurpleBar,
  PurpleTasks,
  PurpleBarGroup,
  Eyes,
  Stars,
  BigStar,
  SmallStar,
  Phone,
  Background,
} from './styledLanding';
import React from 'react';
import founderImg from '../../images/founder-img.png';
import closeIcon from '../../images/close.svg';
import playButton from '../../images/play.svg';
import LandingForm from '../landing-form/LandingForm';
import purpleBar from '../../images/purple-bar.png';
import purpleBarGroup from '../../images/purple-bar-group.png';
import purpleTasks from '../../images/purple-tasks.png';
import eyes from '../../images/eyes.png';
import bigStar from '../../images/big_star.png';
import smallStar from '../../images/small_star.png';
import phone from '../../images/phone.png';

function Landing({
  user,
  setFormFields,
  formFields,
  isVisible,
  handleSubmit,
  buttonText,
  setEditSubmitText,
  appElement
}) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const videoRef = React.useRef();

  // open or close based on isOpen state
  function toggleVideoModal() {
    videoRef.current.seekTo(0);
    if (!isOpen) {
      setIsPlaying(true);
    } else {
      setIsPlaying(false);
    }
    setIsOpen(!isOpen);
  }

  return (
    <LandingContainer>
      <VideoModal $show={isOpen} onClick={toggleVideoModal}>
        <VideoWrapper>
          <Video
            ref={videoRef}
            playing={isPlaying}
            url="https://vimeo.com/657605947"
            width="100%"
            height="100%"
            loop={true}
          />
          <Close src={closeIcon} alt="close" onClick={toggleVideoModal} />
        </VideoWrapper>
      </VideoModal>
      <Heading>No more irrelevant startups in your inbox</Heading>
      <SubHeading>
        Create a custom form for startups to fill and scroll only through the relevant candidates.
      </SubHeading>
      <FounderContainer>
        <FounderSmallText>
          Watch our founder, Igor Shoifot, explain main features of the product
        </FounderSmallText>
        <FounderImageWrapper onClick={toggleVideoModal}>
          <FounderImage src={founderImg} alt="Founder" />
          <FounderOverlay>
            <PlayIcon src={playButton} alt="play" />
          </FounderOverlay>
        </FounderImageWrapper>
      </FounderContainer>
      <Cards>
        <Card1 translate>
          <CardHeading $width="316px">1. You create a form</CardHeading>
          <CardSmallText>
            This form will allow to filter out irrelevant startups: you choose which fields to add
            to the form!
          </CardSmallText>
          <CardList>
            <CardListItem>— Name, email?</CardListItem>
            <CardListItem>— Yes, please!</CardListItem>
            <CardListItem>— ARR Revenue?</CardListItem>
            <CardListItem>— For sure!</CardListItem>
          </CardList>
        </Card1>
        <Card2>
          <CardHeading $width="428px">2. Startups fill in your form</CardHeading>
          <CardSmallText>
            You can share a link to the form wherever you like or send it directly to startups. They
            will fill it in and you will see their application in your feed!
          </CardSmallText>
        </Card2>
        <Card3>
          <CardHeading $width="381px">3. You see the startups in your feed</CardHeading>
          <CardSmallText>
            You’ll see the cards of the startups that have completed your form. With the data you
            need know about them to make the right decision. You’ll also be able to filter them by
            various parameters of the form.
          </CardSmallText>
        </Card3>
        <Card4>
          <CardHeading $width="437px">4. You find that one startup</CardHeading>
          <CardSmallText>
            If everything goes well, you’ll be able to find a startup you’ll want to invest in!
            You’ll be able to contact them and start the dialogue.
          </CardSmallText>
        </Card4>
      </Cards>
      <Background>
        <PurpleBar src={purpleBar} alt="purple stick" />
        <PurpleTasks src={purpleTasks} alt="purple sticks" />
        <PurpleBarGroup src={purpleBarGroup} alt="purple sticks" />
        <Eyes src={eyes} alt="eyes" />
        <Stars>
          <SmallStar src={smallStar} alt="small star" />
          <BigStar src={bigStar} alt="big star" />
        </Stars>
        <Phone src={phone} alt="phone" />
      </Background>
      <LandingForm
        user={user}
        setFormFields={setFormFields}
        formFields={formFields}
        isVisible={isVisible}
        handleSubmit={handleSubmit}
        buttonText={buttonText}
        setEditSubmitText={setEditSubmitText}
        appElement={appElement}
      />
    </LandingContainer>
  );
}

export default Landing;
