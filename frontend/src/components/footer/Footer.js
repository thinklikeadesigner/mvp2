import React from 'react';
import { StyledFooter, Copyright, Credit, FooterLink } from './styledFooter.js';

export default function Footer() {
  return (
    <StyledFooter>
      <Copyright>VentureCat &copy; 2022</Copyright>
      <FooterLink
        href="https://dotcot-test.s3.eu-west-1.amazonaws.com/MIT+License.pdf"
        rel="noreferrer noopener"
        target="_blank"
      >
        Terms of use
      </FooterLink>
      <Credit>Made by Practicum by Yandex students</Credit>
    </StyledFooter>
  );
}
