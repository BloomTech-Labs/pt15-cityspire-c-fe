import React, { useState, useEffect } from 'react';

const Home = ({ LoadingComponent }) => {
  return (
    <div>
      <LoadingComponent message="Rendering map and fetching saved cities..." />
      On home page!
    </div>
  );
};

export default Home;
