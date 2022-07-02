import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Heading, SubHeading, Paragraph } from './styledNotFound';

export default function NotFound() {
  return (
    <Container>
      <Heading>404</Heading>
      <SubHeading>Oops! Sorry about that...</SubHeading>
      <Paragraph>
        Head back <Link to="/welcome">Home</Link>
      </Paragraph>
    </Container>
  );
}
