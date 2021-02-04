import React from 'react';
import RenderLandingPage from '../components/RenderLandingPage';
import LandingHeader from '../components/LandingHeader';
import Footer from '../../common/Footer';
import '../../../antD/styles/landing.css';
import LandingHFCRS from '../../common/layoutComponents/LandingHFCRS';

function LandingContainer() {
  return (
    <div className="page page-layout">
      <LandingHFCRS
        HeaderComponents={<LandingHeader />}
        FooterComponents={<Footer />}
        ContentComponents={<RenderLandingPage />}
      />
    </div>
  );
}

export default LandingContainer;
