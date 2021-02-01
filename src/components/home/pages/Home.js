import React from 'react';

import LayoutHFCRS from '../../common/layoutComponents/LayoutHFCRS';
import Map from '../components/Map';
import MapHeader from '../components/MapHeader';

// Implementation makes use the layout: LayoutHFCRS.js

const Home = ({ LoadingComponent }) => {
  return (
    <div className="page">
      <LayoutHFCRS
        HeaderComponents={<MapHeader />}
        FooterComponents={null}
        ContentComponents={<Map />}
        SidebarComponents={null}
      />
    </div>
  );
};

export default Home;
