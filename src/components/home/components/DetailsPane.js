import React, { useState } from 'react';

import '../../../antD/styles/detailsPane.css';

const DetailsPane = () => {
  const [hidden, sethidden] = useState(true);
  return (
    !hidden && <div className="details-pane">This is the details pane</div>
  );
};

export default DetailsPane;
