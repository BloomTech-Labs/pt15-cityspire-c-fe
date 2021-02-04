import React from 'react';
import RenderLandingPage from '../components/RenderLandingPage';
import LandingHeader from '../components/LandingHeader';
import Footer from '../../common/Footer';
import '../../../antD/styles/landing.css';
import LayoutHFC from '../../common/layoutComponents/LayoutHFC';

function LandingContainer() {
  return (
    <div className="page page-layout">
      <LayoutHFC
        HeaderComponents={<LandingHeader />}
        FooterComponents={<Footer />}
        ContentComponents={<RenderLandingPage />}
      />
    </div>
  );
}

export default LandingContainer;
