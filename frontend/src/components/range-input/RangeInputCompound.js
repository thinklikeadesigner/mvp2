import React from 'react';
import {
  Container,
  Label,
  Slider,
  SliderTrack,
  SliderValue,
  LimitValueContainer,
  LimitValue,
} from './styledRangeInputComponent';

export default function Input({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Input.Label = function InputLabel({ children, ...restProps }) {
  return <Label {...restProps}>{children}</Label>;
};

Input.Slider = function InputSlider({ children, ...restProps }) {
  return <Slider {...restProps}>{children}</Slider>;
};

Input.SliderTrack = function InputSliderTrack({ children, ...restProps }) {
  return <SliderTrack {...restProps}>{children}</SliderTrack>;
};

Input.SliderValue = function InputSliderValue({ children, ...restProps }) {
  return <SliderValue {...restProps}>{children}</SliderValue>;
};

Input.LimitValueContainer = function InputLimitValueContainer({ children, ...restProps }) {
  return <LimitValueContainer {...restProps}>{children}</LimitValueContainer>;
};

Input.LimitValue = function InputLimitValue({ children, ...restProps }) {
  return <LimitValue {...restProps}>{children}</LimitValue>;
};

