import styled from 'styled-components/macro';
import { SmallCaps, SmallLink, SmallText, H1, P } from '../global/textStyles';
import addIcon from '../../images/add-icon.svg';
import subtractIcon from '../../images/subtract-icon.svg';

export const Wrapper = styled.section`
  width: 100%;
`;

export const TitlesWrapper = styled.div`
  display: ${(props) => props.$isVisible ? 'block' : 'none'};
  max-width: 600px;
  margin: 0 auto;
  padding: 0 0 100px;

  @media (max-width: 480px){
    padding-bottom: 80px;
  }
`;

export const Title = styled(H1)`
  text-align: center;
  font-style: normal;
  font-weight: 700;
  letter-spacing: -0.01em;

  @media (max-width: 860px){
    font-size: 38px;
    line-height: 46px;
  }
`;

export const Subtitle = styled(P)`
  text-align: center;
  margin: 36px auto 0 auto;

  @media (max-width: 860px){
    margin: 20px auto 0 auto;
  }
`;

export const ColumnsWrapper = styled.div`
  max-width: 1360px;
  display: flex;
  position: relative;
  padding-bottom: 200px;

  @media (max-width: 1439px){
    padding-bottom: 216px;
  }
  @media (max-width: 1023px) {
    padding-bottom: 80px;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    padding-bottom: 206px;
  }
`;

export const StartupColumn = styled.div`
  margin-right: 40px;
  flex: 1;

  @media (max-width: 1023px) {
    margin-right: 30px;
  }
  @media (max-width: 860px) {
    margin: 40px 0 0 0;
    order: 1;
  }
`;

export const FormColumn = styled(StartupColumn)`
  margin-right: 0;
  @media (max-width: 860px) {
    order: 0;
  }
`;

export const Heading = styled(SmallCaps)`
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 30px;
  margin-bottom: 20px;
`;

export const ActionIcon = styled.div`
  background: center / contain no-repeat
    url(${(props) => (props.$selected ? subtractIcon : addIcon)});
  width: 20px;
  height: 20px;
  margin: 0 8px 0 0;

  @media (max-width: 1023px) {
    margin: 0 10px 0 0;
  }
`;


export const ButtonsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  @media (max-width: 1023px) {
    gap: 16px;
  }
`;

export const Form = styled.form``;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  border: none;
  border-radius: 20px;
  padding: 20px 30px;
  background: #7000ff;
  box-shadow: 4px -4px 4px 0px #38008066 inset, -3px 3px 4px 0px #ab69ff inset;
  color: #fff;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 30px;
  &:hover {
    cursor: pointer;
    background: #580abc;
    transition: background 0.3s;
  }

  @media (max-width: 1093px) {
    font-size: 14px;
    line-height: 30px;
    padding: 13px 20px;
  }
`;

export const FormSubmit = styled(Button)`
  margin: 80px 0 0 0;
  padding: 15px 30px;

  @media (max-width: 1023px) {
    padding: 8px 20px;
  }
  @media (max-width: 860px) {
    margin: 80px auto 0 auto;
    width: ${(props) => (props.path === '/welcome') ? '240px' : 'auto'};
  }
`;

export const MobileSubmit = styled(FormSubmit)`
  display: none;

  @media (max-width: 860px) {
    width: ${(props) => (props.path === '/welcome') ? '240px' : 'auto'};
    position: absolute;
    display: block;
    bottom: 80px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: ${(props) => (props.defaultLength === 0 ? '20px 0 70px 0' : '45px 0 85px 0')};
  position: relative;

  @media (max-width: 860px) {
    margin: ${(props) => (props.defaultLength === 0 ? '20px 0 70px 0' : '45px 0 65px 0')};
  }
`;

export const HelpLink = styled(SmallLink)`
  font-style: normal;
  font-weight: 700;
  color: #000;
  display: block;
  &:hover {
    color: #525252;
    cursor: pointer;
    transition: color 0.3s;
    text-decoration: none;
  }
`;

export const NoFieldsMsg = styled(SmallText)``;
