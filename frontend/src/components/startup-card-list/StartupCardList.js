import React from 'react';
import StartupCard from '../startup-card/StartupCard';
import { CardList, ShowButton } from '../startup-card-list/styledStartupCardList';

function StartupCardList({
  startupCardData,
  isLoadingCards,
  setIsLoadingCards,
  skip,
  setSkip,
  startupCardsLength,
  toggleButtonActive,
  getStartupCards,
  handleShowMoreCards,
  noCardsMatchFilter,
  setNoCardsMatchFilter,
}) {
  const [startupCards, setStartupCards] = React.useState([]);
  const [isShowMoreButtonHidden, setIsShowMoreButtonHidden] = React.useState(false);

  // if all cards retrieved, hide the show more button
  React.useEffect(() => {
    if (startupCardsLength === startupCardData?.length) {
      setIsShowMoreButtonHidden(true);
    } else {
      setIsShowMoreButtonHidden(false);
    }
  });

  // populate list with cards and set loading card to false
  React.useEffect(() => {
    setStartupCards(startupCardData);
    setIsLoadingCards(false);
  }, [startupCardData]);

  //
  React.useEffect(() => {
    if (isLoadingCards) {
      setNoCardsMatchFilter(false);
    } else if (noCardsMatchFilter) {
      setIsLoadingCards(false);
    }
  }, [isLoadingCards, noCardsMatchFilter, setIsLoadingCards, setNoCardsMatchFilter]);

  // determine loadingCards or noCards card
  React.useEffect(() => {
    if (!(startupCardData && startupCardData?.length > 0)) {
      setIsLoadingCards(false);
      setNoCardsMatchFilter(true);
    } else {
      setNoCardsMatchFilter(false);
    }
  }, [startupCardData]);

  // remember how many times show more button clicked, gathers the next amount of cards
  React.useEffect(() => {
    if (localStorage.getItem('skip')) {
      setSkip(JSON.parse(localStorage.getItem('skip')));
    }
  });

  // remove the limit value on refresh, so show-more buttons clicks can start again
  React.useEffect(() => {
    window.onunload = function () {
      setNoCardsMatchFilter(false);
      localStorage.removeItem('skip');
    };
  });

  return (
    <>
      <CardList>
        {startupCards?.map((card) => (
          <StartupCard key={card.id} {...card} />
        ))}
      </CardList>
      {!isLoadingCards && !isShowMoreButtonHidden && startupCards?.length > 0 && (
        <ShowButton style={{ maxWidth: '170px' }} onClick={handleShowMoreCards}>
          Show More
        </ShowButton>
      )}
    </>
  );
}
export default StartupCardList;
