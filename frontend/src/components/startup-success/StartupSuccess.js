import React from 'react';
import { H1 } from '../global/textStyles';
import { Subhead, SuccessContainer, TextContainer } from './styledStartupSuccess';
import Background from '../../images/startup_success_background.png';

const StartupSuccess = ({ investor }) => {
  return (
    // <SuccessContainer style={{
    //   backgroundImage: `url(${Background})`, backgroundPosition: 'center',
    //   backgroundRepeat: 'no-repeat',
    // }}>
    <SuccessContainer image={Background}>
      <TextContainer>
        <H1>Thank you!</H1>
        <Subhead>
          {`Now ${investor.name} ${investor.surname} will see your application in their feed. If they like your startup, they will get in contact with you. Good luck and have a good day!`}
        </Subhead>
      </TextContainer>
    </SuccessContainer>
  )
}

export default StartupSuccess
