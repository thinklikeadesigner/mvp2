import styled from 'styled-components/macro';
import { SmallText, SmallLink } from '../global/textStyles';

export const StyledFooter = styled.footer`
  background: #1f1f1f;
  box-shadow: inset -2px 2px 2px rgba(255, 255, 255, 0.6),
    inset -8px 8px 4px rgba(255, 255, 255, 0.2), inset 6px -6px 24px #000000,
    0 28px 18px -12px rgb(0 0 0 / 50%);
  border-radius: 30px;
  max-width: 1360px;
  padding: 60px 40px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    padding: 30px;
    display: grid;
    gap: 16px;
    /* grid-template-areas:
      'a b'
      'c c'; */
    grid-template-columns: 1fr;
  }

  @media (max-width: 480px) {
    padding: 30px;
  }
  @media (max-width: 374px) {
    padding: 30px 20px;
  }
`;

export const Copyright = styled(SmallText)`
  color: #fff;

  @media (max-width: 768px) {
    /* grid-area: a; */
  }

  @media (max-width: 480px) {
    font-size: 14px;
    font-style: normal;
  }
`;

export const FooterLink = styled(SmallLink)`
  color: #fff;
  cursor: pointer;
  text-decoration: none;
  font-weight: 400;
  transition: all 0.3s linear;
  &:hover {
    opacity: 0.7;
    text-decoration: none;
  }

  @media (max-width: 768px) {
    /* grid-area: b; */
    width: 100%;
    /* text-align: right; */
  }

  @media (max-width: 480px) {
    font-size: 14px;
    font-style: normal;
  }
`;

export const Credit = styled(SmallText)`
  color: #fff;

  @media (max-width: 768px) {
    /* grid-area: c; */
    width: 100%;
    /* text-align: center; */
  }

  @media (max-width: 480px) {
    font-size: 14px;
    font-style: normal;
  }
`;
