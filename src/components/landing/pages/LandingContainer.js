import React from 'react';
import RenderLandingPage from '../components/RenderLandingPage';
import LandingHeader from '../components/LandingHeader';
import LayoutHFCRS from '../../common/layoutComponents/LayoutHFCRS';

function LandingContainer({ LoadingComponent }) {
  return (
    <>
      <LandingHeader />
      <RenderLandingPage />
    </>
  );
}

export default LandingContainer;
