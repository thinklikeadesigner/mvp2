import React from 'react';
import logo from '../../images/logo.png';
import { Container, Logo } from './styledLoader';

export default function Loader() {
  return (
    <Container>
      <Logo src={logo} alt="DotCot" />
    </Container>
  );
}
