import React, { useState, useRef, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import StartupForm from '../startup-form/StartupForm';
import StartupSuccess from '../startup-success/StartupSuccess';
import { LargeCaption } from '../global/textStyles';
import {
  StartupPageContainer,
  HeadingContainer,
  StartupTitle,
  FounderContainerStartup,
  FounderSmallTextStartup,
  FounderImageWrap,
  StartupCaption,
} from './styledStartupLanding';
import {
  VideoModal,
  VideoWrapper,
  Video,
  Close,
  FounderImage,
  FounderOverlay,
  PlayIcon,
} from '../landing/styledLanding';
import closeIcon from '../../images/close.svg';
import playButton from '../../images/play.svg';
import founderImg from '../../images/founder-img.png';
import api from '../../utils/api';

const initInvestor = {
  _id: '',
  formUrl: '',
  email: '',
  name: '',
  surname: '',
  formFields: [],
};

const StartupLanding = ({ setIsLoading }) => {
  const [investor, setInvestor] = useState(initInvestor);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const videoRef = useRef();
  const [isPlaying, setIsPlaying] = useState(false);
  const history = useHistory();
  const { formUrl } = useParams();

  useEffect(() => {
    // setInvestor(tempInvestor);
    setIsLoading(true);
    api
      .getForm(formUrl)
      .then((res) => {
        setInvestor(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        history.push('/404');
        setIsLoading(false);
      });
  }, [formUrl, history]);

  // open or close modal based on isOpen state
  function toggleVideoModal() {
    videoRef.current.seekTo(0);
    if (!isOpen) {
      setIsPlaying(true);
    } else {
      setIsPlaying(false);
    }
    setIsOpen(!isOpen);
  }

  function handleSuccess(value) {
    setIsSuccess(value);
  }

  return (
    <StartupPageContainer>
      {isSuccess ? (
        <StartupSuccess investor={investor} />
      ) : (
        <>
          <VideoModal $show={isOpen} onClick={toggleVideoModal}>
            <VideoWrapper>
              <Video
                ref={videoRef}
                playing={isPlaying}
                // This can be a different video than the main landing page
                url="https://vimeo.com/657605947"
                width="100%"
                height="100%"
                loop={true}
              />
              <Close src={closeIcon} alt="close" onClick={toggleVideoModal} />
            </VideoWrapper>
          </VideoModal>
          <HeadingContainer>
            <StartupTitle>{`${investor.name} ${investor.surname} is in search of startups`}</StartupTitle>
            <StartupCaption>
              Fill in this form and the investor will see your startup in his feed
            </StartupCaption>
          </HeadingContainer>
          <FounderContainerStartup>
            <FounderSmallTextStartup>
              Watch our founder, Igor Shoifot, explain main features of the product
            </FounderSmallTextStartup>
            <FounderImageWrap onClick={toggleVideoModal}>
              <FounderImage src={founderImg} alt="Founder" />
              <FounderOverlay>
                <PlayIcon src={playButton} alt="play" />
              </FounderOverlay>
            </FounderImageWrap>
          </FounderContainerStartup>
          <StartupForm investor={investor} handleSuccess={handleSuccess} />
        </>
      )}
    </StartupPageContainer>
  );
};

export default StartupLanding;
