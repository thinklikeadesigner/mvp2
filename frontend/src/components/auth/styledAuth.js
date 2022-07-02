import styled from 'styled-components/macro';

export const Content = styled.div`
  min-height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Heading = styled.h1`
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 32px;
  line-height: 44px;
  margin: 0;
  margin-bottom: 80px;
`;

export const Button = styled.button`
  background: #ffffff;
  box-shadow: inset -3px 3px 4px rgba(255, 255, 255, 0.2), inset 4px -4px 4px rgba(0, 0, 0, 0.07),
    0 24px 18px -12px rgb(108 108 108 / 40%);
  border-radius: 20px;
  margin-bottom: 34px;
  padding: 18px 24px;
  /* box-shadow: 0 12px 4px -10px rgba(108, 108, 108, 0.4); */
  border: none;
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  align-items: center;
  text-align: center;
  width: 394px;
  max-width: 100%;
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  cursor: pointer;
  transition: color 0.15s ease;

  &:hover {
    color: #7000ff;
  }

  @media (max-width: 440px) {
    font-size: 16px;
    padding: 16px 20px;
  }
`;

export const ButtonIcon = styled.img`
  width: 24px;
`;
