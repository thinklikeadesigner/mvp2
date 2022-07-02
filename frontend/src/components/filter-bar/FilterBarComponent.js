import React, { createRef } from 'react';
import RangeInputComponent from '../range-input/RangeInputComponent';
import {
  FilterBarContainer,
  ToggleButtonContainer,
  ToggleButton,
  FilterBar,
  DropDownHeader,
  Title,
  HeaderButtonContainer,
  ApplyButton,
  Arrow,
  DropDownForm,
  InputGroup,
  selectedMenu,
  InputLabel,
  InputListHeaderContainer,
  InputListField,
  InputListHeader,
  MenuArrow,
  InputListItem,
  activeTheme,
} from './styledFilterBarComponent';
import FilterBarArrowUp from '../../images/filter_bar_arrow-up.svg';
import FilterBarArrowDown from '../../images/filter_bar_arrow-down.svg';
import FilterMenuArrowUp from '../../images/filter_menu_arrow-up.svg';
import FilterMenuArrowDown from '../../images/filter_menu_arrow-down.svg';
import { REGIONS, SEGMENTS } from '../../utils/configData.json';

function FilterBarComponent({
  selectInputState,
  setSelectInputState,
  revenueRangeInputState,
  setRevenueRangeInputState,
  growthRangeInputState,
  setGrowthRangeInputState,
  handleApplyClick,
  onClearClick,
  onRelevantButtonClick,
  onOtherButtonClick,
  toggleButtonActive,
  setToggleButtonActive,
  resetSkip,
  setNoCardsMatchFilter,
  user,
}) {
  const [isDropDownOpened, setIsDropDownOpened] = React.useState(true);
  const [isSegmentMenuOpen, setIsSegmentMenuOpen] = React.useState(false);
  const [isLocationMenuOpen, setIsLocationMenuOpen] = React.useState(false);
  let wrapperRef = createRef();

  // make sure only one select menu is open at a time
  React.useEffect(() => {
    if (isSegmentMenuOpen) {
      setIsLocationMenuOpen(false);
    } else if (isLocationMenuOpen) {
      setIsSegmentMenuOpen(false);
    }
  }, [isSegmentMenuOpen, isLocationMenuOpen]);

  // close menu on click outside
  React.useEffect((e) => {
    window.addEventListener('click', closeOnClickOutside);
    return () => window.removeEventListener('click', closeOnClickOutside);
  });

  // Close menus with Escape button
  React.useEffect(() => {
    const closeByEscape = (e) => {
      if (e.key === 'Escape') {
        closeAllSelectMenus();
      }
    };
    document.addEventListener('keydown', closeByEscape);
    return () => document.removeEventListener('keydown', closeByEscape);
  }, []);

  // close menus by clicking outside
  function closeOnClickOutside(e) {
    if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
      closeAllSelectMenus();
    }
  }

  // close all menus
  function closeAllSelectMenus() {
    setIsSegmentMenuOpen(false);
    setIsLocationMenuOpen(false);
  }

  // on input submits, set the selectInputState variable, and close all menus
  function handleSelectInputChange(e) {
    setSelectInputState({
      ...selectInputState,
      [e.target.name]: e.target.dataset.statevalue,
    });
    closeAllSelectMenus();
  }


  // on change, set the range input
  function handleRangeInputChange(min, max, setRangeInput, rangeInput) {
    setRangeInput({
      ...rangeInput,
      min: min,
      max: max,
    });
  }

  // give only the clicked toggle button the 'active' CSS class
  function handleToggleButtonClick() {
    setNoCardsMatchFilter(false);
    resetSkip();
    if (toggleButtonActive === 1) {
      setToggleButtonActive(2);
      onOtherButtonClick();
    } else if (toggleButtonActive === 2) {
      setToggleButtonActive(1);
      onRelevantButtonClick();
    }
  }

  function onApplyClick() {
    setNoCardsMatchFilter(false);
    resetSkip();
    handleApplyClick();
  }

  const userRevenue = user.formFields.includes('revenue');
  const userSegment = user.formFields.includes('segment');
  const userLocation = user.formFields.includes('location');
  const userGrowth = user.formFields.includes('growth');

  function transformValue(array, value) {
    const index = array.find((item) => item.value === value);
    if (index) {
      return index.textContent;
    } else if (value === selectInputState.segment){
      return 'Choose segment';
    } else if (value === selectInputState.location) {
      return 'Choose region/location';
    }
  }

  return (
    <FilterBarContainer>
      {/* toggle buttons above the main filter bar */}
      <ToggleButtonContainer>
        <ToggleButton
          theme={toggleButtonActive === 1 ? activeTheme : ''}
          onClick={handleToggleButtonClick}
        >
          Relevant
        </ToggleButton>
        <ToggleButton
          theme={toggleButtonActive === 2 ? activeTheme : ''}
          onClick={handleToggleButtonClick}
        >
          Others
        </ToggleButton>
      </ToggleButtonContainer>

      {/* main filter bar */}
      <FilterBar isDropDownOpened={isDropDownOpened}>
        <DropDownHeader>
          <Title>Filters</Title>
          <HeaderButtonContainer>
            <ApplyButton onClick={isDropDownOpened ? onApplyClick : onClearClick}>
              {isDropDownOpened ? 'Apply' : 'Clear'}
            </ApplyButton>
            <Arrow
              src={isDropDownOpened ? FilterBarArrowUp : FilterBarArrowDown}
              onClick={() => setIsDropDownOpened(!isDropDownOpened)}
            ></Arrow>
          </HeaderButtonContainer>
        </DropDownHeader>
        {/* filter input form which opens when header button is clicked */}
        {isDropDownOpened && (
          <DropDownForm>
            {/* revenue range input */}
            {userRevenue && (
              <RangeInputComponent
                labelName={'Annual Revenue'}
                min={10}
                max={200}
                onChange={({ min, max }) =>
                  handleRangeInputChange(
                    min,
                    max,
                    setRevenueRangeInputState,
                    revenueRangeInputState
                  )
                }
                minLimitValue={'$10k'}
                maxLimitValue={'$200k'}
                initialMinimumInputValue={revenueRangeInputState.min}
                initialMaximumInputValue={revenueRangeInputState.max}
              />
            )}
            {/* segment select input */}
            {userSegment && (
              <InputGroup activeMenu={isSegmentMenuOpen ? selectedMenu : ''}>
                <InputLabel>Industry</InputLabel>
                <InputListHeaderContainer
                  ref={wrapperRef}
                  onClick={() => setIsSegmentMenuOpen(!isSegmentMenuOpen)}
                >
                  <InputListHeader>
                    {selectInputState.segment && !(toggleButtonActive === 2)
                      ? transformValue(SEGMENTS, selectInputState.segment)
                      : 'Choose industry'}
                  </InputListHeader>
                  <MenuArrow src={isSegmentMenuOpen ? FilterMenuArrowUp : FilterMenuArrowDown} />
                </InputListHeaderContainer>
                {isSegmentMenuOpen && (
                  <InputListField>
                    {SEGMENTS.map((segment) => (
                      <InputListItem
                        key={segment.value}
                        name="segment"
                        value={segment.textContent}
                        data-stateValue={segment.value}
                        readOnly
                        onClick={handleSelectInputChange}
                      />
                    ))}
                  </InputListField>
                )}
              </InputGroup>
            )}
            {/* location select input */}
            {userLocation && (
              <InputGroup activeMenu={isLocationMenuOpen ? selectedMenu : ''}>
                <InputLabel>Location</InputLabel>
                <InputListHeaderContainer
                  ref={wrapperRef}
                  onClick={() => setIsLocationMenuOpen(!isLocationMenuOpen)}
                >
                  <InputListHeader>
                    {selectInputState.location && !(toggleButtonActive === 2)
                      ? transformValue(REGIONS, selectInputState.location)
                      : 'Choose location'}
                  </InputListHeader>
                  <MenuArrow src={isLocationMenuOpen ? FilterMenuArrowUp : FilterMenuArrowDown} />
                </InputListHeaderContainer>
                {isLocationMenuOpen && (
                  <InputListField>
                    {REGIONS.map((location) => (
                      <InputListItem
                        key={location.value}
                        name="location"
                        value={location.textContent}
                        data-stateValue={location.value}
                        readOnly
                        onClick={handleSelectInputChange}
                      />
                    ))}
                  </InputListField>
                )}
              </InputGroup>
            )}
            {/* growth range input */}
            {userGrowth && (
              <RangeInputComponent
                labelName={'New Users Per Month'}
                min={10}
                max={200}
                onChange={({ min, max }) =>
                  handleRangeInputChange(min, max, setGrowthRangeInputState, growthRangeInputState)
                }
                minLimitValue={'10'}
                maxLimitValue={'200 '}
                initialMinimumInputValue={growthRangeInputState.min}
                initialMaximumInputValue={growthRangeInputState.max}
              />
            )}
          </DropDownForm>
        )}
      </FilterBar>
    </FilterBarContainer>
  );
}

export default FilterBarComponent;
