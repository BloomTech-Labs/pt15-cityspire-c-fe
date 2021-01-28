import React, { useState } from 'react';

import LayoutHFCRS from '../../common/layoutComponents/LayoutHFCRS';

// Implementation makes use the layout: LayoutHFCRS.js

const Home = ({ LoadingComponent }) => {
  return (
    <div>
      <LoadingComponent message="Rendering map and fetching saved cities..." />
      <LayoutHFCRS
        HeaderComponents={null}
        FooterComponents={null}
        ContentComponents={null}
        SidebarComponents={null}
      />
    </div>
  );
};

export default Home;
