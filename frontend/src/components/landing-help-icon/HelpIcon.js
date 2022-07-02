import React, { useRef } from 'react'
import { QuestionMark, HelpWrapper, HelpText, Pointer } from './styledHelpIcon'

export default function HelpIcon({ helpText, custom, appElement }) {

  // true = HelpIcon fits on page, so it goes RIGHT of Q mark
  // false = HelpIcon DOESN'T fit on page, so it goes LEFT of Q mark
  const [position, setPosition] = React.useState(true);
  const [isOpen, setIsOpen] = React.useState(false);
  const popupRef = useRef();

  const handleMouseEnter = () => {
    findAndSetPosition();
    setIsOpen(true);
  }

  const handleMouseExit = () => {
    setIsOpen(false);
    setPosition(true);
  }

  const calcPopupDistance = () => {
    // distance from left edge of screen to right edge of popup
    const popupDistance = popupRef.current.getBoundingClientRect().right;

    // if screen is greater than 1440
      // popupDistance will include left margin
      // this conditional measures the true popupDistance
    if (window.innerWidth > 1440) {
      // get difference of total window size and app size (for margins)
      const difference = window.innerWidth - appElement;
      // get single margin
      const leftMargin = difference / 2;
      // calculate from app's left edge to popup's right edge
      return popupDistance - leftMargin;
    }

    // all other screen sizes should have no margins & be correct
    return popupDistance;
  }

  const findAndSetPosition = () => {
    // get right edge of popup
    const popupRight = calcPopupDistance();
    // compare right edge of popup to edge of screen
    if (popupRight > appElement) {
      setPosition(false);
    }

    // use these to get an idea of the math
      // console.log(`popup: ${popupRight}`);
      // console.log(`app: ${appElement}`);
  }

  return (
    <QuestionMark onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseExit} custom={custom}>
      <HelpWrapper ref={popupRef} $isOpen={isOpen} $position={position}>
        <HelpText>{helpText}</HelpText>
        <Pointer $isOpen={isOpen} $position={position}/>
      </HelpWrapper>
    </QuestionMark>
  )
}
