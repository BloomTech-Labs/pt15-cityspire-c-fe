import React, { useState } from 'react';

import LayoutHFCRS from '../../common/layoutComponents/LayoutHFCRS';
import DetailsPane from '../components/DetailsPane';
import Map from '../components/Map';
import MapHeader from '../components/MapHeader';

// Implementation makes use the layout: LayoutHFCRS.js
// Adding multiple components FooterComponents={<><Comp1 /> <Comp2 /></>}

const Home = ({ LoadingComponent }) => {
  return (
    <div className="page">
      <LayoutHFCRS
        HeaderComponents={<MapHeader />}
        FooterComponents={null}
        ContentComponents={
          <>
            <Map /> <DetailsPane />
          </>
        }
        SidebarComponents={null}
      />
    </div>
  );
};

export default Home;
