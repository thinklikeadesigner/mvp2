import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  margin-bottom: 40px;
  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 1024px) {
    margin-bottom: 25px;
  }
`;

export const Label = styled.p`
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 30px;
  color: #525252;
  margin-bottom: 20px;
  margin-top: 0;
  text-transform: uppercase;
`;

export const Slider = styled.div`
  position: relative;
  width: 100%;
`;

export const SliderTrack = styled.div`
  height: 2px;
  position: absolute;
  background-color: #979797;
  width: 100%;
  z-index: 1;
`;

export const SliderValue = styled.div`
  color: #7000ff;
  font-size: 12px;
  margin-top: -25px;
  position: absolute;
  left: ${(props) => `calc(${props.value / 1.9}% + (${-13 - props.value * 0.125}px))`};
  @media (max-width: 1300px) {
    left: ${(props) => `calc(${props.value / 1.9}% + (${-12 - props.value * 0.125}px))`};
  }
  @media (max-width: 1200px) {
    left: ${(props) => `calc(${props.value / 1.9}% + (${-9 - props.value * 0.125}px))`};
  }
  @media (max-width: 1000px) {
    left: ${(props) => `calc(${props.value / 1.9}% + (${-7 - props.value * 0.125}px))`};
  }
  @media (max-width: 860px) {
    left: ${(props) => `calc(${props.value / 1.9}% + (${-11 - props.value * 0.125}px))`};
  }
  @media (max-width: 700px) {
    left: ${(props) => `calc(${props.value / 1.9}% + (${-9 - props.value * 0.125}px))`};
  }
  @media (max-width: 600px) {
    left: ${(props) => `calc(${props.value / 1.9}% + (${-11 - props.value * 0.125}px))`};
  }
  @media (max-width: 340px) {
    left: ${(props) => `calc(${props.value / 1.9}% + (${-10 - props.value * 0.125}px))`};
  }
`;

export const LimitValueContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 36px;
`;

export const LimitValue = styled.p`
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  margin: 0;
  color: #7000ff;

  @media (max-width: 1080px) {
    font-size: 11px;
  }

  @media (max-width: 860px) {
    font-size: 14px;
  }
`;
