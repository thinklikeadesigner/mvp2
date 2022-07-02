import styled from 'styled-components/macro';
import { P, SmallText } from '../global/textStyles';

export const FilterBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 427px;
  width: 30.5%;
  margin-bottom: 79px;

  @media (max-width: 1200px) {
    max-width: 288px;
    min-width: 273px;
  }

  @media (max-width: 860px) {
    width: 100%;
    max-width: 660px;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 0;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  width: 100%;

`;

export const ToggleButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border: none;
  border-radius: 30px;
  margin: 0 0 20px 0;
  background-color: #e0e0e0;

  @media (max-width: 860px) {
    width: 229px;
    max-height: 52px;
    border-radius: 20px;
  }

  @media (max-width: 600px) {
    max-width: 343px;
    width: 100%;
    max-height: 62px;
    margin-bottom: 16px;
  }
`;

export const ToggleButton = styled.button`
  width: 50%;
  min-height: 80px;
  font-family: 'Inter', sans-serif;
  font-size: 20px;
  line-height: 30px;
  font-weight: bold;
  padding: 0;
  border: none;
  border-radius: 30px;
  &:hover {
    cursor: pointer;
  }
  color: ${(props) => props.theme.color};
  background-color: ${(props) => props.theme.background};
  box-shadow: ${(props) => props.theme.shadow};

  @media (max-width: 860px) {
    font-size: 16px;
    line-height: 20px;
    min-height: 52px;
    border-radius: 20px;
  }

  @media (max-width: 600px) {
    min-height: 62px;
  }
`;

ToggleButton.defaultProps = {
  theme: {
    color: '#525252',
    shadow: 'none',
    background: 'transparent',
  },
};

export const activeTheme = {
  color: 'black',
  shadow: 'inset -4px 4px 4px rgba(0, 0, 0, 0.05), inset 3px -5px 4px rgba(96, 96, 96, 0.2)',
  background: 'white',
};

export const FilterBar = styled.div`
  width: 100%;
  border-radius: 30px;
  padding: 25px 35px;
  background-color: white;
  box-shadow: inset -4px 4px 4px rgba(0, 0, 0, 0.05), inset 3px -5px 4px rgba(96, 96, 96, 0.2);

  @media (max-width: 1200px) {
    padding: 25px 25px;
  }

  @media (max-width: 860px) {
    max-width: 343px;
    width: 51.9%;
    padding: 16px 22px;
    height: ${(props) => (props.isDropDownOpened ? '' : '52px')};
    border-radius: ${(props) => (props.isDropDownOpened ? '30px' : '20px')};
    display: ${(props) => (props.isDropDownOpened ? 'block' : 'flex')};
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const DropDownHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const Title = styled(P)`
  font-family: 'Inter', sans-serif;
  font-weight: 700;

  @media (max-width: 860px) {
    font-size: 16px;
  }
`;

export const HeaderButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ApplyButton = styled.button`
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: #7000ff;
  margin-right: 30px;
  background-color: transparent;
  border: none;
  &:hover {
    cursor: pointer;
  }

  @media (max-width: 1200px) {
    margin-right: 10px;
  }
`;

export const Arrow = styled.img`
  &:hover {
    cursor: pointer;
  }
`;

export const MenuArrow = styled(Arrow)`
  margin-right: 20px;

  @media (max-width: 860px) {
    margin-right: 16px;
  }
`;

export const DropDownForm = styled.form`
  width: 100%;
  margin: 40px 0 25px 0;

  @media (max-width: 1200px) {
    margin: 30px 0 25px 0;
  }

  @media (max-width: 860px) {
    margin: 40px 0 24px 0;
  }
`;

export const InputGroup = styled.div`
  position: relative;
  margin-bottom: 40px;
  &:last-child {
    margin-bottom: 0;
  }
  z-index: ${(props) => props.activeMenu.index};

  @media (max-width: 1200px) {
    margin-bottom: 25px;
  }

  @media (max-width: 860px) {
    margin-bottom: 40px;
  }
`;

InputGroup.defaultProps = {
  activeMenu: {
    index: '0',
  },
};

export const selectedMenu = {
  index: '6',
};

export const InputLabel = styled.p`
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 30px;
  color: #525252;
  margin-bottom: 10px;
  text-transform: uppercase;
`;

export const InputRangeField = styled.input`
  width: 100%;
  height: 2px;
  -webkit-appearance: none;
  -moz-appearance: none;
  outline: 0;
  background: ${(props) =>
    `linear-gradient(to right, #7000FF 0%, #7000FF ${props.value / 2}%, #979797 ${
      props.value / 2
    }%, #979797 100%);`};
  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 20px;
    height: 20px;
    background-color: #ffffff;
    border-radius: 50%;
    border: 2px solid #7000ff;
    &:hover {
      cursor: pointer;
    }
  }
`;

export const InputLimitValueContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

export const InputLimitValue = styled.p`
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  margin: 0;
  color: #7000ff;
`;

export const InputListHeaderContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  z-index: 1;
  background-color: #7000ff;
  padding: 11px 0 11px 20px;
  box-sizing: border-box;
  border: 1px solid #7000ff;
  border-radius: 10px;
  user-select: none;
  &:hover {
    cursor: pointer;
  }

  @media (max-width: 1200px) {
    padding-left: 11px;
  }

  @media (max-width: 860px) {
    padding-left: 20px;
  }
`;

export const InputListHeader = styled(SmallText)`
  font-weight: 700;
  color: #ffffff;
  user-select: none;

  @media (max-width: 1200px) {
    font-size: 14px;
  }

  @media (max-width: 860px) {
    font-size: 16px;
  }
`;

export const InputListField = styled.div`
  position: absolute;
  top: 70px;
  width: 100%;
  max-height: 240px;
  background-color: #ffffff;
  color: white;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  border: 1px solid #7000ff;
  border-radius: 0 0 10px 10px;
  overflow: scroll;
`;

export const InputListItem = styled.input`
  position: relative;
  width: 100%;
  list-style: none;
  overflow: auto;
  border: none;
  padding: 5px 0 5px 20px;
  font-weight: 700;
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  line-height: 20px;
  color: #000000;
  &:hover {
    cursor: pointer;
    background-color: #f4f4f4;
  }
  &:first-child {
    margin-top: 20px;
  }
  &:last-child {
    margin-bottom: 10px;
  }
`;
