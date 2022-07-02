import styled from 'styled-components/macro';
import { SmallText } from '../global/textStyles';
import selectArrow from '../../images/select_arrow.svg';

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 426px;
  margin-top: 60px;
  margin-bottom: 120px;
  z-index: 5;

  @media (max-width: 575px) {
    width: 100%;
    max-width: 375px;
  }
`;

export const Label = styled.label`
  font-family: 'Inter', sans-serif;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  text-transform: uppercase;
  color: #525252;
  margin-bottom: 0;
  margin-top: 60px;
  padding: 0;
  display: flex;
  flex-direction: column;

  ${(props) => {
    if (props.labelType === 'logoLabel') {
      return `
        align-items: center;
        z-index: 1;
      `;
    }
  }};

  @media (max-width: 1025px) {
    margin-top: 40px;
    line-height: 30px;
  }
`;

export const LogoFile = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 5;
`;

export const Input = styled.input`
  margin-top: 8px;
  height: 60px;
  border-radius: 20px;
  box-shadow: inset -1px 2px 4px rgba(0, 0, 0, 0.25);
  border: none;
  padding: 16px 20px;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 20px;
  line-height: 30px;
  text-transform: none;
  width: 100%;
`;

export const TextArea = styled.textarea`
  margin-top: 8px;
  border-radius: 20px;
  box-shadow: inset -1px 2px 4px rgba(0, 0, 0, 0.25);
  border: none;
  padding: 16px 20px;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 20px;
  line-height: 30px;
  text-transform: none;
  resize: none;
  width: 100%;
`;

export const Error = styled(SmallText)`
  color: #ff0000;
  margin-top: 5px;
`;

export const Select = styled.select`
  display: grid;
  margin-top: 8px;
  height: 60px;
  width: 100%;
  border-radius: 20px;
  box-shadow: inset -1px 2px 4px rgba(0, 0, 0, 0.25);
  border: none;
  padding: 16px 20px;
  font-weight: bold;
  font-size: 20px;
  line-height: 30px;
  text-transform: none;
  color: #50555c;
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  cursor: pointer;
  background-image: url(${selectArrow});
  background-position: center right 23px;
  background-repeat: no-repeat;
  background-color: #fff;
`;

export const SubmitButton = styled.button`
  background-color: #7000ff;
  width: 100%;
  height: 60px;
  color: #ffffff;
  border-radius: 20px;
  font-family: 'Inter', sans-serif;
  font-size: 20px;
  line-height: 30px;
  font-weight: bold;
  border: none;
  transition: transform ease-in 0.2s;
  box-shadow: inset -3px 3px 4px #ab69ff, inset 4px -4px 4px rgba(56, 0, 128, 0.4),
    0 24px 18px -12px rgba(74, 0, 169, 0.4);
  &:hover {
    cursor: pointer;
    -webkit-transform: translateY(10px);
    transform: translateY(10px);
  }
  &:disabled {
    background-color: #898a8d;
    transform: none;
    box-shadow: inset -3px 3px 4px #979797, inset 4px -4px 4px rgba(96, 96, 96, 0.2),
      0 24px 18px -12px #979797;
  }
`;

export const ReCaptchaContainer = styled.div`
  height: 76px;
  width: 302px;
  background-color: #f9f9f9;
  border: solid 1px #d3d3d3;
  margin: 40px auto 40px;
`;

export const TermsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 66px;
`;

export const Checkbox = styled.input`
  margin-right: 16px;
  width: 20px;
  height: 20px;
  border-radius: 6px;
  background-color: white;
  cursor: pointer;
`;

export const CheckboxError = styled(Error)`
  text-align: center;
`;
