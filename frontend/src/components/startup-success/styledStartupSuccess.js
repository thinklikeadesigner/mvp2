import styled from 'styled-components/macro';
import { LargeCaption } from '../global/textStyles';

export const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-image: url(${props => props.image});
  background-position: center;
  background-repeat: no-repeat;
  margin-top: 75px;
  margin-bottom: 110px;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 198px;
  padding-bottom: 118px;
  max-width: 600px;
`;

export const Subhead = styled(LargeCaption)`
  text-align: center;
  margin-top: 30px;
`;