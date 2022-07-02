import React, { useState, useRef, useCallback, useEffect } from 'react';
import Input from './RangeInputCompound';
import './RangeInputClassStyles.css';
import classnames from 'classnames';
import { useDebounce } from '../../hooks';

function RangeInputComponent({
  min,
  max,
  onChange,
  minLimitValue,
  maxLimitValue,
  labelName,
  initialMinimumInputValue,
  initialMaximumInputValue,
  storedStartupFilterValues,
}) {
  const [displaySliderValue, setDisplaySliderValue] = useState({
    leftSliderValue: false,
    rightSliderValue: false,
  });
  const [minVal, setMinVal] = useState(initialMinimumInputValue);
  const [maxVal, setMaxVal] = useState(initialMaximumInputValue);
  const minValRef = useRef(null);
  const maxValRef = useRef(null);
  const range = useRef(null);
  const debouncedMin = useDebounce(minVal, 200);
  const debouncedMax = useDebounce(maxVal, 200);

  // sets displayed range values on any value state change
  useEffect(() => {
    setMinVal(initialMinimumInputValue);
    setMaxVal(initialMaximumInputValue);
  }, [initialMaximumInputValue, initialMinimumInputValue]);

  // create a percentage from the values
  const getPercent = useCallback(
    (value) => {
      return Math.round(((value - min) / (max - min)) * 100);
    },
    [min, max]
  );

  // Set width of the range to decrease from the left side
  useEffect(() => {
    if (maxValRef.current) {
      const minPercent = getPercent(minVal);
      const maxPercent = getPercent(maxValRef.current.value);

      if (range.current) {
        range.current.style.left = `${minPercent}%`;
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [minVal, getPercent]);

  // Set width of the range to decrease from the right side
  useEffect(() => {
    if (minValRef.current) {
      const minPercent = getPercent(minValRef.current.value);
      const maxPercent = getPercent(maxVal);

      if (range.current) {
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [maxVal, getPercent]);

  // get values on state change
  useEffect(() => {
    onChange({ min: debouncedMin, max: debouncedMax });
  }, [debouncedMin, debouncedMax]);

  // show slider values when mousedown on thumb sliders
  function handleInputMouseDown(e) {
    if (e.type === 'mousedown') {
      setDisplaySliderValue({
        ...displaySliderValue,
        [e.target.id]: true,
      });
    } else {
      setDisplaySliderValue({
        ...displaySliderValue,
        [e.target.id]: false,
      });
    }
  }

  return (
    <Input>
      <Input.Label>{labelName}</Input.Label>
      <input
        type="range"
        name="revenue"
        id="leftSliderValue"
        min={min}
        max={max}
        step="5"
        value={minVal}
        ref={minValRef}
        onChange={(e) => {
          const value = Math.min(e.target.value, maxVal - 5);
          setMinVal(value);
        }}
        onMouseDown={handleInputMouseDown}
        onMouseUp={handleInputMouseDown}
        className={classnames('thumb thumb--zindex-3', { 'thumb--zindex-5': minVal > max - 100 })}
      />
      <input
        type="range"
        name="revenue"
        id="rightSliderValue"
        min={min}
        max={max}
        step="5"
        value={maxVal}
        ref={maxValRef}
        onChange={(e) => {
          const value = Math.max(e.target.value, minVal + 5);
          setMaxVal(value);
        }}
        onMouseDown={handleInputMouseDown}
        onMouseUp={handleInputMouseDown}
        className="thumb thumb--zindex-4"
      />
      <Input.Slider className="slider">
        <Input.SliderTrack className="slider__track" />
        <div ref={range} className="slider__range"></div>
        {displaySliderValue.leftSliderValue && (
          <Input.SliderValue value={minVal} className="slider__left-value">
            {minVal}
          </Input.SliderValue>
        )}
        {displaySliderValue.rightSliderValue && (
          <Input.SliderValue value={maxVal} className="slider__right-value">
            {maxVal}
          </Input.SliderValue>
        )}
      </Input.Slider>
      <Input.LimitValueContainer>
        <Input.LimitValue>{minLimitValue}</Input.LimitValue>
        <Input.LimitValue>{maxLimitValue}</Input.LimitValue>
      </Input.LimitValueContainer>
    </Input>
  );
}

export default RangeInputComponent;
