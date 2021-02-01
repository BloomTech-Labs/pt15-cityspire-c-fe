import React from 'react';
import RenderLandingPage from '../components/RenderLandingPage';
import LandingHeader from '../components/LandingHeader';
import Footer from '../../common/Footer';
import '../../../antD/styles/landing.css';

function LandingContainer({ LoadingComponent }) {
  return (
    <div className="page page-layout">
      <LandingHeader />
      <RenderLandingPage />
      <Footer />
    </div>
  );
}

export default LandingContainer;
