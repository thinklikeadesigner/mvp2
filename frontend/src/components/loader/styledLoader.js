import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  0% {transform: scale(1) rotate(-5deg);}
  10% {transform: scale(1.10) rotate(5deg);}
  66% {transform: scale(.75) rotate(-15deg);}
  100% {transform: scale(1) rotate(355deg);}
`;

export const Container = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  min-width: 100vw;
  z-index: 50;
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.7);
`;

export const Logo = styled.img`
  max-width: 50vw;
  opacity: 0.9;
  animation: ${rotate} 1.5s ease infinite;
`;
