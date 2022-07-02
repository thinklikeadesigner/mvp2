import styled from "styled-components";
import questionIcon from '../../images/question-icon.svg';
import questionPurple from '../../images/question-icon-purple.svg';
import pointer from '../../images/Union.svg';
import pointerRight from '../../images/right-pointer.svg';
import { SmallText } from "../global/textStyles";

export const QuestionMark = styled.div`
  background: ${(props) => (props.custom ? 
    `center / contain no-repeat url(${questionPurple})` :
    `center / contain no-repeat url(${questionIcon})`
  )};
  margin: ${(props) => (props.custom ? `0 0 0 12px` : `0 0 0 8px`)};
  width: ${(props) => (props.custom ? `26px` : `20px`)};
  height: ${(props) => (props.custom ? `26px` : `20px`)};
  position: relative;

  @media (max-width: 1023px) {
    margin: 0 0 0 10px;
  }

  &:hover{
    cursor: pointer;
  }
`;

export const HelpWrapper = styled.div`
  background: #494949;
  opacity: ${(props) => (props.$isOpen === false ? 0 : 1)};
  visibility: ${(props) => (props.$isOpen === false ? 'hidden' : 'visible')};
  width: 359px;
  padding: 24px 20px;
  border-radius: 20px;
  position: absolute;
  top: calc(50% + 28px);
  left: ${(props) => (props.$position === true ? 'calc(50% - 20px)' : 'calc(-359px + 31px)')};
  z-index: 2;
  box-shadow: -2px 4px 4px rgba(0, 0, 0, 0.25), inset -3px 2px 2px rgba(255, 255, 255, 0.25), inset 3px -4px 4px rgba(0, 0, 0, 0.25);

  @media(max-width: 658px) {
    width: 190px;
    left: ${(props) => (props.$position === true ? 'calc(50% - 20px)' : 'calc(-190px + 31px)')};
  }
`;

export const Pointer = styled.div`
  background: center / contain no-repeat;
  background-image: ${(props) => (props.$position === true ? `url(${pointer})` : `url(${pointerRight})`)};
  position: absolute;
  width: 28px;
  height: 28px;
  top: -22px;
  left: ${(props) => (props.$position === true ? '20px' : 'calc(100% - 48px)')};
  z-index: 1;
  opacity: ${(props) => (props.$isOpen === false ? 0 : 1)};
  visibility: ${(props) => (props.$isOpen === false ? 'hidden' : 'visible')};
`;

export const HelpText = styled(SmallText)`
  color: #FFF;
  font-weight: 500;
  text-align: left;
`;