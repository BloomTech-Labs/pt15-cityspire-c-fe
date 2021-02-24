import React, { useState, useEffect } from 'react';

import '../../../antD/styles/detailsPane.css';

import axios from 'axios';

import { axiosCodes, axiosAPICall } from '../../../utils/axiosEndpoints';

const DetailsPane = ({ currentPlaceSelection }) => {
  const [cityData, setCityData] = useState({});

  useEffect(() => {
    axios
      .post(
        'http://cityspire00n.eba-diy2emuk.us-east-1.elasticbeanstalk.com/location/data',
        {
          location: `${currentPlaceSelection.city}, ${currentPlaceSelection.state}`,
        }
      )
      .then(res => {
        setCityData({
          ...res.data,
        });
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className="details-pane">
      <p>Name: {cityData.city_name}</p>
      <p>Population: {cityData.population}</p>
      <p>Average Rent: {cityData.rent_per_month}</p>
      <p>Walkability: {cityData.walk_score}</p>
      <p>Liveability: {cityData.livability_score}</p>
    </div>
  );
};

export default DetailsPane;
