import React from 'react';
import google from '../../images/google.svg';
import facebook from '../../images/facebook.svg';
import linkedin from '../../images/linkedin.svg';
import { Heading, Content, Button, ButtonIcon } from './styledAuth';
const { REACT_APP_BACKEND_URL } = process.env;

export default function Auth({ heading, setLoggedIn, isSignup }) {
  function handleGoogleAuth() {
    window.open(`${REACT_APP_BACKEND_URL}api/auth/google`, '_self');
  }

  function handleFacebookAuth() {
    window.open(`${REACT_APP_BACKEND_URL}api/auth/facebook`, '_self');
  }

  function handleLinkedinAuth() {
    window.open(`${REACT_APP_BACKEND_URL}api/auth/linkedin`, '_self');
  }

  return (
    <Content>
      <Heading>{heading}</Heading>
      <Button type="button" name="google" onClick={handleGoogleAuth}>
        <ButtonIcon alt="google" src={google} />
        Sign up with Google
      </Button>
      <Button type="button" name="facebook" onClick={handleFacebookAuth}>
        <ButtonIcon alt="facebook" src={facebook} />
        Sign up with Facebook
      </Button>
      <Button type="button" name="linkedin" onClick={handleLinkedinAuth}>
        <ButtonIcon alt="linkedIn" src={linkedin} />
        Sign up with LinkedIn
      </Button>
    </Content>
  );
}
