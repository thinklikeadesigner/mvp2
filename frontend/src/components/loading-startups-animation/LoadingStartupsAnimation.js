import React from 'react';
import { LoadingStartupsContainer, Title, Loader } from './styledLoadingStartupsAnimation';

function LoadingStartupsAnimation({ text, loaderShowing }) {
  return (
    <LoadingStartupsContainer>
      <Title>{text}</Title>
      {loaderShowing && <Loader></Loader>}
    </LoadingStartupsContainer>
  );
}

export default LoadingStartupsAnimation;
