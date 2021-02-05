import React from 'react';

import LayoutHFC from '../../common/layoutComponents/LayoutHFC';
import ContentContainer from '../components/ContentContainer';

const Dashboard = () => {
  return (
    <div>
      <LayoutHFC
        HeaderComponents={<div />}
        FooterComponents={<div />}
        ContentComponents={<ContentContainer />}
      />
    </div>
  );
};

export default Dashboard;
