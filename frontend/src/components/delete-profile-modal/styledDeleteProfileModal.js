import styled from 'styled-components/macro';

export const Modal = styled.div`
  visibility: ${(props) => (props.$show ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.$show ? 1 : 0)};
  position: fixed;
  top: 0;
  left: 0;
  min-width: 100vw;
  min-height: 100vh;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  transition: visibility 0.3s ease, opacity 0.3s ease;
`;

export const Container = styled.div`
  background-color: #fff;
  border-radius: 30px;
  padding: 30px 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 426px;
  box-shadow: inset 3px -3px 4px rgba(0, 0, 0, 0.25);
`;
export const Warning = styled.p`
  width: 88%;
  margin: 0 auto 40px;
  text-align: center;
  font-family: 'Inter' sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const Label = styled.label`
  text-transform: uppercase;
  width: 88%;
  margin: 0 auto 16px;
  text-align: center;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #525252;
`;

export const Input = styled.input`
  background: #f2f2f2;
  box-shadow: inset -1px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  height: 60px;
  border: none;
  text-align: center;
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  margin-bottom: 60px;
`;
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Button = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
  color: ${(props) => (props.type === 'submit' ? '#EA4335' : '#000')};
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
`;
