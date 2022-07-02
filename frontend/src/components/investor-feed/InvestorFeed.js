import { useCallback, useEffect, useRef, useState } from 'react';
import StartupCardList from '../startup-card-list/StartupCardList';

import { StyledInvestorFeed, StartupCardContainer } from './styledInvestorFeed';
import LoadingStartupsAnimation from '../loading-startups-animation/LoadingStartupsAnimation';
import FilterBarComponent from '../filter-bar/FilterBarComponent';
import api from '../../utils/api';
import Profile from '../profile/Profile';
import { useLocalStorage } from '../../hooks';

const initialState = {
  growthRangeInputState: { min: 10, max: 200 },
  revenueRangeInputState: { min: 10, max: 200 },
  selectInputState: { location: '', segment: '' },
};

function InvestorFeed({ user, deleteInvestor }) {
  const [filterState, setFilterState] = useLocalStorage('filterState', initialState);
  const [otherFilterState, setOtherFilterState] = useState(initialState);
  const [needsUpdate, setNeedsUpdate] = useState(true);

  const [isLoadingCards, setIsLoadingCards] = useState(false);
  const [toggleButtonActive, setToggleButtonActive] = useState(1);
  const [startupCardData, setStartupCardData] = useState([]);
  const [startupCardsLength, setStartupCardsLength] = useState();
  const [skip, setSkip] = useState(0);
  const isShowMoreButtonClicked = useRef(false);
  const [noCardsMatchFilter, setNoCardsMatchFilter] = useState(false);
  const [getStartupsErrorCode, setGetStartupsErrorCode] = useState();

  const isOtherState = toggleButtonActive === 2;

  const setGrowthRangeInputState = (growthRangeInputState) =>
    isOtherState
      ? setOtherFilterState((fs) => ({ ...fs, growthRangeInputState }))
      : setFilterState((fs) => ({ ...fs, growthRangeInputState }));

  const setRevenueRangeInputState = (revenueRangeInputState) =>
    isOtherState
      ? setOtherFilterState((fs) => ({ ...fs, revenueRangeInputState }))
      : setFilterState((fs) => ({ ...fs, revenueRangeInputState }));

  const setSelectInputState = (selectInputState) =>
    isOtherState
      ? setOtherFilterState((fs) => ({ ...fs, selectInputState }))
      : setFilterState((fs) => ({ ...fs, selectInputState }));

  const assignStartupCards = (res) => {
    if (isShowMoreButtonClicked.current) {
      setStartupCardData((prevData) => [...prevData, ...res.startups]);
    } else {
      setStartupCardData(res.startups);
    }
    isShowMoreButtonClicked.current = false;
  };

  // sends changed values in GET request, and sets changed values into localStorage
  const getStartupCards = useCallback(
    ({
      revenueRangeInputState: revenue,
      selectInputState: { segment, location },
      growthRangeInputState: growth,
      skip = localStorage.getItem('skip'),
    }) => {
      setIsLoadingCards(true);
      api
        .fetchCards(revenue, segment, location, growth, skip)
        .then((res) => {
          setStartupCardsLength(parseInt(res.count, 10));
          assignStartupCards(res);
          setIsLoadingCards(false);
        })
        .catch((err) => {
          setStartupCardData(null);
          setIsLoadingCards(false);
          setGetStartupsErrorCode(parseInt(err.match(/\d+/g)));
        });
    },
    []
  );

  // runs when show-more button is clicked
  const handleShowMoreCards = () => {
    isShowMoreButtonClicked.current = true;
    localStorage.setItem('skip', skip + 50);
    if (toggleButtonActive === 1) {
      handleApply();
    } else {
      handleOtherButtonClick();
    }
  };

  // clears skip values
  const resetSkip = () => {
    setSkip(0);
    localStorage.removeItem('skip');
  };

  // on Apply click, gets filtered startup cards, and sets localStorage
  function handleApply() {
    setNeedsUpdate(true);
  }

  // resets all input values and gets appropriate cards, enables useEffect to set localStorage
  function handleClearButtonClick() {
    handleApply();
    resetSkip();
    setFilterState(initialState);
  }

  // resets input values and gets all startups cards, doesnt set localStorage
  function handleOtherButtonClick() {
    handleApply();
    setOtherFilterState(initialState);
  }

  // if needsUpdate, runs getStartupCards with updated values
  useEffect(() => {
    if (needsUpdate) {
      setNeedsUpdate(false);
      getStartupCards(isOtherState ? otherFilterState : filterState);
    }
  }, [getStartupCards, filterState, isOtherState, needsUpdate, otherFilterState]);

  // only shows Profile component if database has no cards
  function investorHasCards() {
    return !(getStartupsErrorCode === 404);
  }

  return investorHasCards() ? (
    <div>
      <StyledInvestorFeed>
        <FilterBarComponent
          selectInputState={
            isOtherState ? otherFilterState.selectInputState : filterState.selectInputState
          }
          setSelectInputState={setSelectInputState}
          revenueRangeInputState={
            isOtherState
              ? otherFilterState.revenueRangeInputState
              : filterState.revenueRangeInputState
          }
          setRevenueRangeInputState={setRevenueRangeInputState}
          growthRangeInputState={
            isOtherState
              ? otherFilterState.growthRangeInputState
              : filterState.growthRangeInputState
          }
          setGrowthRangeInputState={setGrowthRangeInputState}
          handleApplyClick={handleApply}
          onClearClick={handleClearButtonClick}
          onRelevantButtonClick={handleApply}
          onOtherButtonClick={handleOtherButtonClick}
          toggleButtonActive={toggleButtonActive}
          setToggleButtonActive={setToggleButtonActive}
          resetSkip={resetSkip}
          setNoCardsMatchFilter={setNoCardsMatchFilter}
          user={user}
        />
        <StartupCardContainer>
          {isLoadingCards && !noCardsMatchFilter && (
            <LoadingStartupsAnimation text="Loading Startups" loaderShowing={true} />
          )}
          {noCardsMatchFilter && !isLoadingCards && (
            <LoadingStartupsAnimation
              text="No cards match your filter! Try different settings"
              loaderShowing={false}
            />
          )}

          <StartupCardList
            startupCardData={startupCardData}
            setStartupCardData={setStartupCardData}
            isLoadingCards={isLoadingCards}
            setIsLoadingCards={setIsLoadingCards}
            getStartupCards={getStartupCards}
            skip={skip}
            setSkip={setSkip}
            startupCardsLength={startupCardsLength}
            toggleButtonActive={toggleButtonActive}
            handleShowMoreCards={handleShowMoreCards}
            noCardsMatchFilter={noCardsMatchFilter}
            setNoCardsMatchFilter={setNoCardsMatchFilter}
          />
        </StartupCardContainer>
      </StyledInvestorFeed>
    </div>
  ) : (
    <Profile
      title="We're happy to see you! You'll find new startups here."
      subtitle="For now, you can share your form:"
      showDelete={false}
      formPath={user && `form/${user.formUrl}`}
      showBackground={true}
      deleteInvestor={deleteInvestor}
    />
  );
}

export default InvestorFeed;

// // // only shows Profile component if filter bar hasn't been used AND there are no cards
// // const usingFilter = () => {
// //   if (startupCardData?.startups?.length === 0) {
// //     return false;
// //   } else {
// //     return true;
// //   }
// // };
