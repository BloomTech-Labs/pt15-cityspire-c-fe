import React, { useState, useEffect } from 'react';

import '../../../antD/styles/detailsPane.css';

const DetailsPane = props => {
  const [hidden, sethidden] = useState(false);

  useEffect(() => {
    sethidden(props.display);
  }, [props.display]);

  return <div className="details-pane">This is the details pane</div>;
};

export default DetailsPane;
